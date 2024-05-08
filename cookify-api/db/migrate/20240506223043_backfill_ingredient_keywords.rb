class BackfillIngredientKeywords < ActiveRecord::Migration[7.0]
  def change
    Ingredient.where(keywords: nil).each { |i| publish_text_changed(i) }
  end


  def publish_text_changed(ingredient)
    ingredient.publish(
      exchange_name: Publisher::EXCHANGES[:ingredient_changed],
      message: {
        ingredient_id: ingredient.id,
        text: ingredient.text,
      },
    )
  end
end
