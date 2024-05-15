module Publisher
  extend ActiveSupport::Concern

  EXCHANGES = {
    ingredient_changed: "ingredient_changed",
    get_all_similarities: "get_all_similarities",
    get_similarities: "get_similarities",
    get_user_recommendations: "get_user_recommendations",
  }.freeze


  def publish(exchange_name:, message:)
    exchange = channel.fanout(exchange_name, durable: true)
    begin
      exchange.publish(message.to_json, persistent: true, timestamp: Time.now.to_i)
    rescue Bunny::ConnectionClosedError => e
      channel.connection.recover_from_network_failure
      raise e
    end
  end


  private def channel
    @@channel ||= connection.create_channel
  end


  private def connection
    @@connection ||= RabbitQueueService.connection
  end
end
