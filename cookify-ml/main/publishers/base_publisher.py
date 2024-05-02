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

        self.channel.default_exchange.basic_publish(routing_key=self.__queue__, body=message)
        print(f" [x] {self.__exchange__} | Sent {message}\n")


    def __connect(self):
        self.channel = self.connection.get_channel()


    def __define_exchange_and_queue(self):
        self.__connect()
        exchange = self.channel.declare_exchange(name=self.__exchange__, type="fanout", durable=True)
        queue = self.channel.declare_queue(name=self.__queue__, durable=True,
            arguments={"x-dead-letter-exchange": self.__queue__ + "-retry"})
        queue.bind(exchange)
