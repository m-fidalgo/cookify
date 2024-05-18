import pandas as pd
from scipy.stats import pearsonr

from main.db.recipe import Recipe
from main.db.rating import Rating
from main.db.user_saved_recipe import UserSavedRecipe

class UserRecommendations:
    def __init__(self):
        self.ratings_dataframe = None


    def recommendations(self, user_info, n=5):
        user_id = user_info['user_id']
        self.set_ratings_dataframe(user_info)
        
        user_ratings = self.ratings_dataframe[self.ratings_dataframe['user_id'] == user_id]
        
        # retorna vazio se o usuário não curtiu, avaliou ou criou nenhuma receita
        if len(user_ratings) == 0:
            return []
        
        similar_user_ids = []
        for id in self.ratings_dataframe['user_id'].unique():
            if id != user_id:
                other_user_ratings = self.ratings_dataframe[self.ratings_dataframe['user_id'] == id]
                # receitas avaliadas em comum
                common_recipes = pd.merge(user_ratings, other_user_ratings, on='recipe_id', how='inner')
                if len(common_recipes) > 1:
                    correlation, _ = pearsonr(common_recipes['rating_x'], common_recipes['rating_y'])
                    similar_user_ids.append((id, correlation))

        similar_user_ids.sort(key=lambda x: x[1], reverse=True)
        
        recommended_ids = []
        for id, _ in similar_user_ids:
            other_user_ratings = self.ratings_dataframe[self.ratings_dataframe['user_id'] == id]
            well_rated_recipe_ids = other_user_ratings[other_user_ratings['rating'] >= 4]['recipe_id'].unique()
            recommended_recipe_ids = [recipe_id for recipe_id in well_rated_recipe_ids if recipe_id not in user_ratings['recipe_id'].unique()]
            for recipe_id in recommended_recipe_ids:
                if recipe_id not in recommended_ids:
                    recommended_ids.append(recipe_id)
                    
        return recommended_ids[:n]


    def set_ratings_dataframe(self, user_info):
        user_id = user_info['user_id']
        
        ratings_df = Rating.ratings_dataframe()
        saved_reciped_df = UserSavedRecipe.saved_recipes_dataframe()
        creators_df = Recipe.creators_dataframe()
        
        user_ratings = ratings_df[ratings_df['user_id'] == user_id]
        user_saved_recipes = saved_reciped_df[saved_reciped_df['user_id'] == user_id]
        
        if(len(user_ratings) == 0 and len(user_saved_recipes) == 0):
            self.ratings_dataframe = pd.DataFrame([])
        
        new_ratings = []
        
        for _, row in saved_reciped_df.iterrows():
            user_id = row['user_id']
            recipe_id = row['recipe_id']
            
            # se a receita não foi avaliada, será inserida no df de avaliações com nota máxima
            if not ((ratings_df['user_id'] == user_id) & (ratings_df['recipe_id'] == recipe_id)).any():
                new_ratings.append({'user_id': user_id, 'recipe_id': recipe_id, 'rating': 5})
        
        # adicionar as receitas que o usuário criou com a maior avaliação
        for _, row in creators_df.iterrows():
            user_id = row['creator_id']
            recipe_id = row['recipe_id']
            new_ratings.append({'user_id': user_id, 'recipe_id': recipe_id, 'rating': 5})
        
        new_ratings_df = pd.DataFrame(new_ratings)
        self.ratings_dataframe = pd.concat([ratings_df, new_ratings_df], ignore_index=True)