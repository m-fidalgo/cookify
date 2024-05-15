class UserRecommendationsWorker
  include Consumer
  include Sneakers::Worker

  bind_exchange EXCHANGES[:user_recommendations_result]


  def process(message)
    User.find(message[:user_id]).update!(recommended_recipe_ids: message[:recommended_ids])
  end
end
