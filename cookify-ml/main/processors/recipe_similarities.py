from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import np

from main.db.recipe import Recipe

class RecipeSimilarities:
    def __init__(self):
        self.model = SentenceTransformer('paraphrase-multilingual-mpnet-base-v2')
        self.recipe_dataframe = None
        self.indexes_by_id = {}


    def calculate_similarities(self):
        # obter o dataframe com todas as receitas
        df = Recipe.recipes_dataframe()
        self.recipe_dataframe = df

        # usado para obter o índice de uma receita no dataframe dado seu id
        self.indexes_by_id = {id_: index for index, id_ in enumerate(self.recipe_dataframe['id'])}

        # unir todas as colunas de forma a obter um único texto que represente a receita
        recipes_text = df['title'] + ' ' + df['ingredients'].apply(self.join_elements) + ' ' + df['categories'].apply(self.join_elements)
        # calcular embeddings
        recipes_embeddings = self.model.encode(recipes_text)
        # usando os embeddings para obter a matriz de similaridade
        similarities = cosine_similarity(recipes_embeddings, recipes_embeddings)
        return similarities


    def recipe_index_by_id(self, recipe_id):
        return self.indexes_by_id.get(recipe_id)


    # n é o número de receitas similares para encontrar
    def similar_recipes_by_index(self, similarities, index, n):
        # receitas semelhantes a essa única receita
        recipe_similarities = similarities[index]
        # obter os índices das receitas com maior semelhança, excluindo ela mesma
        similar_indexes = np.argsort(recipe_similarities)[::-1][1:n+1]
        
        # obter os ids com base nos índices
        similar_ids = [self.recipe_dataframe.iloc[index]['id'] for index in similar_indexes]
        return similar_ids


    def similar_recipes_by_id(self, recipe_id, n = 5):
        similarities = self.calculate_similarities()
        # obter o índice dessa receita no dataframe
        index = self.recipe_index_by_id(recipe_id)
        return self.similar_recipes_by_index(similarities, index, n)


    def all_similar_recipes(self):
        similarities = self.calculate_similarities()
        n_recipes = len(self.recipe_dataframe)
        results = []

        # Iterar sobre cada receita
        for i in range(n_recipes):
            recipe_id = self.recipe_dataframe.iloc[i]['id']
            similar_ids = self.similar_recipes_by_index(similarities, i, 5)
            result = {'recipe_id': str(recipe_id), 'similar_ids': [str(id) for id in similar_ids]}
            results.append(result)
            
        return results


    def join_elements(self, elements):
        if elements:
            return ' '.join(elements)
        else:
            return ''
        