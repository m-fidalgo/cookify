class GetAllRecipeSimilarities < ActiveRecord::Migration[7.0]
  def change
    Recipe.first.publish_get_all_similarities
  end
end
