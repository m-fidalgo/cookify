class AllSimilaritiesWorker
  include Consumer
  include Sneakers::Worker

  bind_exchange EXCHANGES[:all_similarities_result]


  def process(message)
    results = message[:results]
    results.each do |result|
      Recipe.find(result[:recipe_id]).update!(similar_ids: result[:similar_ids])
    end
  end
end
