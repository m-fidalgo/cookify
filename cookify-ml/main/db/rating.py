from main.db.connect import PostgreSQLConnection
import pandas as pd

class Rating:
    @classmethod
    def ratings_dataframe(self):
        psql_connection = PostgreSQLConnection()
        connection = psql_connection.get_connection()
        cursor = connection.cursor()
        query = '''
            SELECT r.user_id, r.recipe_id, r.rating
            FROM ratings r
        '''
        cursor.execute(query)
        records = cursor.fetchall()
        cursor.close()
        psql_connection.close_connection()
        return pd.DataFrame(records, columns=[col.name for col in cursor.description])
