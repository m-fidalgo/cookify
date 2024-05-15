class Rating < ApplicationRecord
  include Ratings::ManagesRecommendations

  belongs_to :recipe
  belongs_to :user

  validates :recipe, presence: {message: "recipe can't be empty"}
  validates :user, presence: {message: "user can't be empty"}
  validates :text, presence: {message: "text can't be empty"}
  validates :rating, presence: {message: "rating can't be empty"}
  validates :rating, inclusion: {in: 0..5}
end
