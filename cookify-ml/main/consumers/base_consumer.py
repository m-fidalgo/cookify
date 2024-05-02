import json

from abc import ABC, abstractmethod
from main.connect import RabbitMQConnection

class RabbitMQConsumer(ABC):
    __exchange__ = None
    __queue__ = None
    connection = RabbitMQConnection()


    def __init__(self):
        self.channel = None
        self.bound = False


    @abstractmethod
    def callback(self, body):
        return NotImplemented


    def on_message(self, ch, method, properties, body):
        body = json.loads(body)
        print(f" [x] {self.__exchange__} | Received {body}\n")
        self.channel.basic_ack(method.delivery_tag)
        self.callback(body)
        print(f" [x] {self.__exchange__} | Finished\n")


    def consume(self):
        self.__define_exchange_and_queue()
        self.channel.basic_consume(self.__queue__, self.on_message)
        print(f" [x] {self.__exchange__} | Waiting for messages\n")
        self.channel.start_consuming()


    def __connect(self):
        self.channel = self.connection.get_channel()


    def __define_exchange_and_queue(self):
        self.__connect()
        self.channel.exchange_declare(self.__exchange__, exchange_type="fanout", durable=True)
        self.channel.queue_declare(self.__queue__, durable=True)
        self.channel.queue_bind(self.__queue__, self.__exchange__)
