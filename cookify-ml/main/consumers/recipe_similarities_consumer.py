from main.consumers.base_consumer import RabbitMQConsumer
from main.processors.recipe_similarities import RecipeSimilarities
from main.publishers.recipe_similarities_publisher import RecipeSimilaritiesPublisher

class RecipeSimilaritiesConsumer(RabbitMQConsumer):
    __exchange__ = 'get_similarities'
    __queue__ = 'Similarities'


    def __init__(self):
        super().__init__()
        self.publisher = RecipeSimilaritiesPublisher()


    def callback(self, body):
        recipe_id = body['recipe_id']
        similar_ids = RecipeSimilarities().similar_recipes_by_id(int(recipe_id), 5)
        self.publisher.publish({
            'recipe_id': recipe_id,
            'similar_ids': [str(id) for id in similar_ids]
        })

