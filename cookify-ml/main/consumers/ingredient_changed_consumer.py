from main.consumers.base_consumer import RabbitMQConsumer
from main.processors.ingredient_lemmatizer import IngredientLemmatizer
from main.publishers.ingredient_keywords_publisher import IngredientKeywordsPublisher

class IngredientChangedConsumer(RabbitMQConsumer):
    __exchange__ = 'ingredient_changed'
    __queue__ = 'IngredientChanged'


    def __init__(self):
        super().__init__()
        self.lemmatizer = IngredientLemmatizer()
        self.publisher = IngredientKeywordsPublisher()


    def callback(self, body):
        updated_text = self.lemmatizer.lemmatize_ingredient(body['text'])
        self.publisher.publish({
            'ingredient_id': body['ingredient_id'],
            'text': updated_text
        })

