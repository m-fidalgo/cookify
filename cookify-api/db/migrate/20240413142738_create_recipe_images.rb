class CreateRecipeImages < ActiveRecord::Migration[7.0]
  def change
    create_table :recipe_images do |t|
      t.string :url
      t.references :recipe, null: false, index: true
      t.timestamps
    end
  end
end
