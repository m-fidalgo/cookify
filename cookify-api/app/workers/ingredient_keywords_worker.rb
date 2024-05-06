class IngredientKeywordsWorker
  include Consumer
  include Sneakers::Worker

  bind_exchange EXCHANGES[:ingredient_keywords]


  def process(message)
    id = message[:ingredient_id]
    text = message[:text]
    Ingredient.find(id).update!(keywords: text)
  end
end
