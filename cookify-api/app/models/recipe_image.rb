class RecipeImage < ApplicationRecord
  belongs_to :recipe

  validates :recipe, presence: {message: "recipe can't be empty"}

  def name
    "recipe_#{recipe.id}_#{id}"
  end
end
