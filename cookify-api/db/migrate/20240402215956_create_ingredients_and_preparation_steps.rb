class CreateIngredientsAndPreparationSteps < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :text, null: false
      t.references :recipe, null: false, index: true
      t.timestamps
    end

    create_table :preparation_steps do |t|
      t.string :text, null: false
      t.integer :position, null: false
      t.references :recipe, null: false, index: true
      t.timestamps
    end
  end
end
