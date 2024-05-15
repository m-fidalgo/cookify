import multiprocessing
import time

from main.consumers.all_recipe_similarities_consumer import AllRecipeSimilaritiesConsumer
from main.consumers.ingredient_changed_consumer import IngredientChangedConsumer
from main.consumers.recipe_similarities_consumer import RecipeSimilaritiesConsumer
from main.consumers.user_recommendations_consumer import UserRecommendationsConsumer

if __name__ == "__main__":
    workers = [AllRecipeSimilaritiesConsumer, IngredientChangedConsumer, RecipeSimilaritiesConsumer, UserRecommendationsConsumer]

    # Create a pool of worker processes
    pool = multiprocessing.Pool(len(workers))

    # Start the workers
    for worker in workers:
        pool.apply_async(worker().consume())

    # Keep the main process running
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("Interrupted")
        pool.terminate()
        pool.join()
