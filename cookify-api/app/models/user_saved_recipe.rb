class UserSavedRecipe < ApplicationRecord
  include UserSavedRecipes::ManagesRecommendations

  belongs_to :recipe
  belongs_to :user
end
