class AddSimilarIdsToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :similar_ids, :integer, array: true, default: []
  end
end
