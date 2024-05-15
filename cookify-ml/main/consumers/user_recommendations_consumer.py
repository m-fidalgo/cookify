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
        user_id = body['user_id']
        recommended_ids = self.recommendator.recommendations(user_id)
        self.publisher.publish({
            'user_id': user_id,
            'recommended_ids': [str(id) for id in recommended_ids]
        })

