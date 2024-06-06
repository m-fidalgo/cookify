from main.consumers.base_consumer import RabbitMQConsumer
from main.processors.user_recommendations import UserRecommendations
from main.publishers.user_recommendations_publisher import UserRecommendationsPublisher

class UserRecommendationsConsumer(RabbitMQConsumer):
    __exchange__ = 'get_user_recommendations'
    __queue__ = 'UserRecommendations'


    def __init__(self):
        super().__init__()
        self.recommendator = UserRecommendations()
        self.publisher = UserRecommendationsPublisher()


    def callback(self, body):
        user_info = body['user_info']
        recommended_ids = self.recommendator.recommendations(user_info)
        recommended_ids = recommended_ids[:5]
        self.publisher.publish({
            'user_id': user_info['user_id'],
            'recommended_ids': [str(id) for id in recommended_ids]
        })

