module UserSavedRecipes::ManagesRecommendations
  extend ActiveSupport::Concern

  included do
    after_commit :fetch_user_recommendations
  end

  private def fetch_user_recommendations
    user.publish_get_recommendations
  end
end
