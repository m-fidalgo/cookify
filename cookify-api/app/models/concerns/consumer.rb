module Consumer
  extend ActiveSupport::Concern

  EXCHANGES = {
    ingredient_keywords: "ingredient_keywords",
    all_similarities_result: "all_similarities_result",
    similarities_result: "similarities_result",
    user_recommendations_result: "user_recommendations_result",
    menu_recommendation_result: "menu_recommendation_result",
  }.freeze


  def work(message)
    Sneakers.logger.info(" [x] #{self.class.name} | Received #{message} \n")
    data = JSON.parse(message).deep_symbolize_keys
    process(data)
    Sneakers.logger.info(" [x] #{self.class.name} | Finished\n")
    ack!
  rescue StandardError => e
    Sneakers.logger.info("error!")
    Sneakers.logger.info(e.full_message)
    reject!
  end


  class_methods do
    def bind_exchange(exchange)
      options = {
        ack: true,
        exchange_options: {
          type: :fanout,
          durable: true,
        },
        exchange: exchange,
      }

      from_queue(name, options)
    end
  end
end
