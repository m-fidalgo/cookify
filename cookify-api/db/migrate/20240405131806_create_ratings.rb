class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.string :text, null: false
      t.integer :rating, null: false, inclusion: 0..5
      t.references :user, null: false, index: true
      t.references :recipe, null: false, index: true
      t.timestamps
    end
  end
end
