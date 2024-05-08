module Ingredients::ManagesIngredientUpdated
  extend ActiveSupport::Concern

  included do
    after_save :publish_ingredient_text_changed, if: :text_previously_changed?
  end


  def publish_ingredient_text_changed
    publish(
      exchange_name: Publisher::EXCHANGES[:ingredient_changed],
      message: {
        ingredient_id: id,
        text: text,
      },
    )
  end
end
