from main.publishers.base_publisher import RabbitMQPublisher

class AllRecipeSimilaritiesPublisher(RabbitMQPublisher):
    __exchange__ = 'all_similarities_result'
    __queue__ = 'AllSimilaritiesWorker'