class GetAllRecommendations < ActiveRecord::Migration[7.0]
  def change
    users = User.all
    users.each(&:publish_get_recommendations)
  end
end
