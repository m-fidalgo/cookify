import os
from dotenv import load_dotenv
import psycopg2

load_dotenv()

DATABASE_NAME = os.getenv('DATABASE_NAME')
DATABASE_HOST = os.getenv('DATABASE_HOST')
DATABASE_PORT = os.getenv('DATABASE_PORT')

class PostgreSQLConnection:
    def __init__(self):
        try:
            self.connection = psycopg2.connect(
                host=DATABASE_HOST,
                database=DATABASE_NAME,
                port=DATABASE_PORT
            )
            print("connected")
        except (psycopg2.DatabaseError, Exception) as error:
            print(error)
        
        
    def get_connection(self):
        return self.connection
    
    
    def close_connection(self):
        self.connection.close()
        print("disconnected")
