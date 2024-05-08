from main.consumers.base_consumer import RabbitMQConsumer
from main.processors.recipe_similarities import RecipeSimilarities
from main.publishers.all_recipe_similarities_publisher import AllRecipeSimilaritiesPublisher

class AllRecipeSimilaritiesConsumer(RabbitMQConsumer):
    __exchange__ = 'get_all_similarities'
    __queue__ = 'AllSimilarities'


    def __init__(self):
        super().__init__()
        self.publisher = AllRecipeSimilaritiesPublisher()


    def callback(self, body):
        all_similarities = RecipeSimilarities().all_similar_recipes()
        self.publisher.publish({
            'results': all_similarities
        })

