from main.db.connect import PostgreSQLConnection
import pandas as pd

class Recipe:
    @classmethod
    def recipes_dataframe(self):
        psql_connection = PostgreSQLConnection()
        connection = psql_connection.get_connection()
        cursor = connection.cursor()
        query = '''
            SELECT r.*, array_agg(i.text) AS ingredients
            FROM recipes r
            LEFT JOIN ingredients i ON r.id = i.recipe_id
            GROUP BY r.id
        '''
        cursor.execute(query)
        records = cursor.fetchall()
        cursor.close()
        psql_connection.close_connection()
        return pd.DataFrame(records, columns=[col.name for col in cursor.description])
