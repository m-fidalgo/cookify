class RabbitQueueService
  def self.logger
    Rails.logger.tagged("bunny") do
      @@logger ||= Rails.logger
    end
  end


  def self.connection
    @@connection ||= begin
      instance = Bunny.new(ENV["CLOUDAMQP_URL"])
      instance.start
      instance
    end
  end

  ObjectSpace.define_finalizer(
    self,
    proc { p "Closing rabbitmq connections"; RabbitQueueService.connection&.close },
  )
end
