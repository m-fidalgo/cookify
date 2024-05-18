from main.db.connect import PostgreSQLConnection
import pandas as pd

class Rating:
    @classmethod
    def ratings_dataframe(self):
        psql_connection = PostgreSQLConnection()
        connection = psql_connection.get_connection()
        cursor = connection.cursor()
        query = '''
            SELECT r.user_id, r.recipe_id, r.rating,
            array_remove(array_agg(DISTINCT c.name), NULL) AS categories
            FROM ratings r
            LEFT JOIN recipe_categories rc ON rc.recipe_id = r.recipe_id
            LEFT JOIN categories c ON rc.category_id = c.id
            GROUP BY r.user_id, r.recipe_id, r.rating
        '''
        cursor.execute(query)
        records = cursor.fetchall()
        cursor.close()
        psql_connection.close_connection()
        return pd.DataFrame(records, columns=[col.name for col in cursor.description])
