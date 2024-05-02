import os
from dotenv import load_dotenv
from pika import BlockingConnection, URLParameters

load_dotenv()

CLOUDAMQP_URL = os.getenv('CLOUDAMQP_URL')

class RabbitMQConnection:
    def __init__(self):
        self.connection = None


    def __del__(self):
        print("closing rabbitmq connection")
        self.connection.close()


    def connect(self):
        print("connecting to rabbitmq")
        if CLOUDAMQP_URL is None:
            raise ValueError("Missing RabbitMQ's URL")
        if not self.connection:
            params = URLParameters(CLOUDAMQP_URL)
            params.socket_timeout = 5
            self.connection = BlockingConnection(params)


    def get_channel(self):
        self.connect()
        return self.connection.channel()

