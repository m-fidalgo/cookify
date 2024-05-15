from main.db.connect import PostgreSQLConnection
import pandas as pd

class UserSavedRecipe:
    @classmethod
    def saved_recipes_dataframe(self):
        psql_connection = PostgreSQLConnection()
        connection = psql_connection.get_connection()
        cursor = connection.cursor()
        query = '''
            SELECT r.user_id, r.recipe_id
            FROM user_saved_recipes r
        '''
        cursor.execute(query)
        records = cursor.fetchall()
        cursor.close()
        psql_connection.close_connection()
        return pd.DataFrame(records, columns=[col.name for col in cursor.description])
