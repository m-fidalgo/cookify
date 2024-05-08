class RecipeCategory < ApplicationRecord
  include RecipeCategories::ManagesDestroy

  belongs_to :recipe
  belongs_to :category
end
