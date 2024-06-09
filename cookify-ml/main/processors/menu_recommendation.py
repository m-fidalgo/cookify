
import pandas as pd

from main.db.rating import Rating
from main.db.recipe import Recipe
from main.processors.user_recommendations import UserRecommendations

class MenuRecommendation:
    def __init__(self):
        self.recipes_dataframe = None
        self.recommended_recipes_dataframe = None
        self.recommendator = UserRecommendations()
        
        
    def get_menu(self, user_info):
        self.recipes_dataframe = self.__get_recipes(user_info)
        self.recommended_recipes_dataframe = self.__get_recommended_recipes(user_info)

        ids_to_exclude = user_info['old_menu_ids']
        breakfast_recipe_id = self.__get_recipe_id_by_category(ids_to_exclude, 'Lanches')
        if breakfast_recipe_id is None:
            breakfast_recipe_id = ''
        else:
            ids_to_exclude.append(breakfast_recipe_id)
        
        main_course_category = 'Prato Principal'
        lunch_recipe_id = self.__get_recipe_id_by_category(ids_to_exclude, main_course_category)
        
        if lunch_recipe_id is None:
            lunch_recipe_id = ''
        else:
            ids_to_exclude.append(lunch_recipe_id)

        dinner_recipe_id = self.__get_recipe_id_by_category(ids_to_exclude, main_course_category)
        if dinner_recipe_id is None:
            dinner_recipe_id = ''
        
        return {
            'user_id': user_info['user_id'],
            'breakfast_recipe_id': str(breakfast_recipe_id),
            'lunch_recipe_id': str(lunch_recipe_id),
            'dinner_recipe_id': str(dinner_recipe_id),
        }
        
    def __get_recipes(self, user_info):
        user_id = user_info['user_id']
        ratings_df = Rating.ratings_dataframe()
        user_ratings = ratings_df[ratings_df['user_id'] == user_id]
        badly_rated_recipe_ids = user_ratings[user_ratings['rating'] < 4]['recipe_id'].unique()

        df = Recipe.recipes_dataframe()
        df = self.recommendator.filter_by_user_preferences(df, user_info)
        # remove badly rated recipes
        if len(badly_rated_recipe_ids) > 0:
            df = df[~df['id'].isin(badly_rated_recipe_ids)]
        return df
        
    def __get_recommended_recipes(self, user_info):
        recommended_ids = self.recommendator.recommendations(user_info)
        return self.recipes_dataframe[self.recipes_dataframe['id'].isin(recommended_ids)]
    
    def __get_recipe_id_by_category(self, ids_to_exclude, category):
        df = self.recommended_recipes_dataframe
        recipe_id = self.__find_recipe_id_in_df(df, ids_to_exclude, category)

        if recipe_id is not None:
            return recipe_id
        
        # procurar em todas as receitas caso não haja nas recomendadas
        df = self.recipes_dataframe
        return self.__find_recipe_id_in_df(df, ids_to_exclude, category)
    
    def __find_recipe_id_in_df(self, df, ids_to_exclude, category):
        recipes = df
        recipes = recipes[recipes['categories'].apply(lambda categories: category in categories)]

        if len(ids_to_exclude) > 0:
            recipes = recipes[~recipes['id'].isin(ids_to_exclude)]

        if len(recipes) != 0:
            return recipes.iloc[0]['id']
        
        
