class AddUserPreferences < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :vegetarian, :boolean, default: false
    add_column :users, :vegan, :boolean, default: false
    add_column :users, :celiac, :boolean, default: false
    add_column :users, :lactose_intolerant, :boolean, default: false
  end
end
