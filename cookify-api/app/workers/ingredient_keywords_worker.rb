class IngredientKeywordsWorker
  include Consumer
  include Sneakers::Worker

  bind_exchange EXCHANGES[:ingredient_keywords]


  def process(message)
    id = message[:ingredient_id]
    text = message[:text]
    ingredient = Ingredient.find(id)
    ingredient.update!(keywords: text)
    ingredient.recipe.publish_get_similarities
  end
end
