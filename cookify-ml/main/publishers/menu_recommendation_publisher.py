from main.publishers.base_publisher import RabbitMQPublisher

class MenuRecommendationPublisher(RabbitMQPublisher):
    __exchange__ = 'menu_recommendation_result'
    __queue__ = 'MenuRecommendationWorker'