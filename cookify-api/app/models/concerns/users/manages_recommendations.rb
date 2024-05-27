module Users::ManagesRecommendations
  extend ActiveSupport::Concern

  included do
    after_update :publish_get_recommendations, if: :preferences_changed?
  end

  def publish_get_recommendations
    publish(
      exchange_name: Publisher::EXCHANGES[:get_user_recommendations],
      message: {
        user_info: {
          user_id: id,
          vegan: vegan,
          vegetarian: vegetarian,
          lactose_intolerant: lactose_intolerant,
          celiac: celiac,
        },
      },
    )
  end


  private def preferences_changed?
    vegan_previously_changed? || vegetarian_previously_changed? || celiac_previously_changed? ||
      lactose_intolerant_previously_changed?
  end
end
