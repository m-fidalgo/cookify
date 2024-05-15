class AddRecommendedIdsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :recommended_recipe_ids, :integer, array: true, default: []
  end
end
