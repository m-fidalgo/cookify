class CreateUserSavedRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :user_saved_recipes do |t|
      t.references :user, null: false, index: true
      t.references :recipe, null: false, index: true
      t.timestamps
    end
  end
end
