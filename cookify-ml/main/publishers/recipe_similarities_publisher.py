from main.publishers.base_publisher import RabbitMQPublisher

class RecipeSimilaritiesPublisher(RabbitMQPublisher):
    __exchange__ = 'similarities_result'
    __queue__ = 'SimilaritiesWorker'