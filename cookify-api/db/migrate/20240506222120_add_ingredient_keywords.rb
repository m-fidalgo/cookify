class AddIngredientKeywords < ActiveRecord::Migration[7.0]
  def change
    add_column :ingredients, :keywords, :string
  end
end
