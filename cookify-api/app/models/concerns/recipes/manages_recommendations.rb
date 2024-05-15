module Recipes::ManagesRecommendations
  extend ActiveSupport::Concern

  included do
    after_create :fetch_user_recommendations
    after_destroy :remove_from_recommended_ids
  end

  private def fetch_user_recommendations
    creator.publish_get_recommendations
  end


  private def remove_from_recommended_ids
    users = User.where("?=ANY(recommended_recipe_ids)", id)
    return if users.blank?

    users.each do |user|
      user.update!(recommended_recipe_ids: user.recommended_recipe_ids - [id])
    end
  end
end
