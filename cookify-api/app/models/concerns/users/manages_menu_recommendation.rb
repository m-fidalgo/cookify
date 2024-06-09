module Users::ManagesMenuRecommendation
  extend ActiveSupport::Concern

  included do
    after_update :publish_get_menu, if: :preferences_changed?
  end

  def publish_get_menu
    publish(
      exchange_name: Publisher::EXCHANGES[:get_menu_recommendation],
      message: {
        user_info: {
          user_id: id,
          old_menu_ids: recent_menu_ids,
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


  def recent_menu_ids
    ids = []
    user_menus.where("created_at > ?", Time.zone.today - 30.days).find_each do |menu|
      ids << menu.breakfast_id
      ids << menu.lunch_id
      ids << menu.dinner_id
    end
    ids.uniq
  end
end
