from main.publishers.base_publisher import RabbitMQPublisher

class UserRecommendationsPublisher(RabbitMQPublisher):
    __exchange__ = 'user_recommendations_result'
    __queue__ = 'UserRecommendationsWorker'