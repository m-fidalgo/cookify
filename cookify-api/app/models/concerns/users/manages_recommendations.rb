module Users::ManagesRecommendations
  extend ActiveSupport::Concern

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
end
