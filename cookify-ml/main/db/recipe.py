from main.db.connect import PostgreSQLConnection
import pandas as pd

class Recipe:
    @classmethod
    def recipes_dataframe(self):
        psql_connection = PostgreSQLConnection()
        connection = psql_connection.get_connection()
        cursor = connection.cursor()
        query = '''
            SELECT r.id, r.title,
            array_remove(array_agg(DISTINCT i.keywords), NULL) AS ingredients,
            array_remove(array_agg(DISTINCT c.name), NULL) AS categories
            FROM recipes r
            LEFT JOIN ingredients i ON r.id = i.recipe_id
            LEFT JOIN recipe_categories rc ON rc.recipe_id = r.id
            LEFT JOIN categories c ON rc.category_id = c.id
            GROUP BY r.id
        '''
        cursor.execute(query)
        records = cursor.fetchall()
        cursor.close()
        psql_connection.close_connection()
        return pd.DataFrame(records, columns=[col.name for col in cursor.description])


    @classmethod
    def creators_dataframe(self):
        psql_connection = PostgreSQLConnection()
        connection = psql_connection.get_connection()
        cursor = connection.cursor()
        query = '''
            SELECT r.id AS recipe_id, r.creator_id
            FROM recipes r
        '''
        cursor.execute(query)
        records = cursor.fetchall()
        cursor.close()
        psql_connection.close_connection()
        return pd.DataFrame(records, columns=[col.name for col in cursor.description])