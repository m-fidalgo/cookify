class MenuRecommendationWorker
  include Consumer
  include Sneakers::Worker

  bind_exchange EXCHANGES[:menu_recommendation_result]


  def process(message)
    UserMenu.create!(
      user_id: message[:user_id],
      breakfast_id: message[:breakfast_recipe_id],
      lunch_id: message[:lunch_recipe_id],
      dinner_id: message[:dinner_recipe_id],
    )
  end
end
