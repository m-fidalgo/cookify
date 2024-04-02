class Ingredient < ApplicationRecord
  belongs_to :recipe

  validates :recipe, presence: {message: "recipe can't be empty"}
  validates :text, presence: {message: "text can't be empty"}
end
