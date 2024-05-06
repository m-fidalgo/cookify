module Consumer
  extend ActiveSupport::Concern

  EXCHANGES = {
    ingredient_keywords: "ingredient_keywords",
  }.freeze


  def work(message)
    Sneakers.logger.info(" [x] #{self.class.name} | Received #{message} \n")
    data = JSON.parse(message).deep_symbolize_keys
    process(data)
    ack!
    Sneakers.logger.info(" [x] #{self.class.name} | Finished\n")
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
