module Exceptions::RecipeExceptions
  class RecipeNotFound < Exceptions::Errors
    def message
      "recipe not found"
    end
  end
end
