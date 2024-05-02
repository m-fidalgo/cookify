from main.consumers.base_consumer import RabbitMQConsumer
from main.processors.ingredient_lemmatizer import IngredientLemmatizer

class IngredientChangedConsumer(RabbitMQConsumer):
    __exchange__ = 'ingredient_changed'
    __queue__ = 'IngredientChanged'


    def __init__(self):
        super().__init__()
        self.lemmatizer = IngredientLemmatizer()


    def callback(self, body):
        #updated_text = self.lemmatizer.lemmatize_ingredient(body['text'])
        print(body)
        return
