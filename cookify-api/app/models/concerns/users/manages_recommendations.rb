module Users::ManagesRecommendations
  extend ActiveSupport::Concern

  def publish_get_recommendations
    publish(
      exchange_name: Publisher::EXCHANGES[:get_user_recommendations],
      message: {
        user_id: id,
      },
    )
  end
end
