class SimilaritiesWorker
  include Consumer
  include Sneakers::Worker

  bind_exchange EXCHANGES[:similarities_result]


  def process(message)
    Recipe.find(message[:recipe_id]).update!(similar_ids: message[:similar_ids])
  end
end
