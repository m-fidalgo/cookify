class PreparationStep < ApplicationRecord
  belongs_to :recipe

  default_scope { order(position: :asc) }

  validates :recipe, presence: {message: "recipe can't be empty"}
  validates :text, presence: {message: "text can't be empty"}
  validates :position, presence: {message: "position can't be empty"}
end
