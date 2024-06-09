class MenuRecommendationJob < ApplicationJob
  def perform
    User.each(&:publish_get_menu)
  end
end
