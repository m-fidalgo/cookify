class CreateUserMenu < ActiveRecord::Migration[7.0]
  def change
    create_table :user_menus do |t|
      t.references :breakfast, foreign_key: {to_table: :recipes}, null: false, index: true
      t.references :lunch, foreign_key: {to_table: :recipes}, null: false, index: true
      t.references :dinner, foreign_key: {to_table: :recipes}, null: false, index: true
      t.references :user, null: false, index: true
      t.timestamps
    end
  end
end
