class CreateRecipeCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :recipe_categories do |t|
      t.references :category, null: false, index: true
      t.references :recipe, null: false, index: true
      t.timestamps
    end
  end
end
