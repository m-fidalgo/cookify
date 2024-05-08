module RecipeCategories::ManagesDestroy
  extend ActiveSupport::Concern

  included do
    after_destroy :fetch_similarities
  end


  private def fetch_similarities
    recipe.publish_get_similarities
  end
end
