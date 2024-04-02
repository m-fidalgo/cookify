class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    ActiveRecord::Base.connection.execute(<<~SQL)
      CREATE TYPE recipe_difficulty AS ENUM('easy', 'medium', 'hard')
    SQL

    create_table :recipes do |t|
      t.string :title, null: false, index: true
      t.string :servings
      t.integer :time, null: false
      t.column :difficulty, :recipe_difficulty, null: false
      t.references :creator, foreign_key: {to_table: :users}, null: false, index: true
      t.timestamps
      t.datetime :deleted_at
    end
  end
end
