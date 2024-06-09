from main.consumers.base_consumer import RabbitMQConsumer
from main.processors.menu_recommendation import MenuRecommendation
from main.publishers.menu_recommendation_publisher import MenuRecommendationPublisher

class MenuRecommendationConsumer(RabbitMQConsumer):
    __exchange__ = 'get_menu_recommendation'
    __queue__ = 'MenuRecommendation'


    def __init__(self):
        super().__init__()
        self.recommendator = MenuRecommendation()
        self.publisher = MenuRecommendationPublisher()


    def callback(self, body):
        user_info = body['user_info']
        recommendation = self.recommendator.get_menu(user_info)
        self.publisher.publish(recommendation)

