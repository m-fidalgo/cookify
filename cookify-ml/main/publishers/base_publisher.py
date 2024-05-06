import json

from abc import ABC
from main.connect import RabbitMQConnection

class RabbitMQPublisher(ABC):
    __exchange__ = None
    __queue__ = None
    connection = RabbitMQConnection()


    def __init__(self):
        self.channel = None
        self.bound = False


    def publish(self, message):
        if self.bound is False:
            self.__define_exchange_and_queue()
            self.bound = True

        message = bytes(json.dumps(message), 'utf-8')
        self.channel.basic_publish(self.__exchange__, self.__queue__, message)
        print(f" [x] {self.__exchange__} | Sent {message}\n")


    def __connect(self):
        self.channel = self.connection.get_channel()


    def __define_exchange_and_queue(self):
        self.__connect()
        self.channel.exchange_declare(self.__exchange__, exchange_type="fanout", durable=True)
        self.channel.queue_declare(self.__queue__, durable=True)
        self.channel.queue_bind(self.__queue__, self.__exchange__)
