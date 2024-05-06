from main.publishers.base_publisher import RabbitMQPublisher

class IngredientKeywordsPublisher(RabbitMQPublisher):
    __exchange__ = 'ingredient-keywords'
    __queue__ = 'IngredientKeywordsWorker'