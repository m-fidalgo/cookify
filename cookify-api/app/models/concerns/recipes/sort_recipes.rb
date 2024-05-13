module Recipes::SortRecipes
  extend ActiveSupport::Concern

  included do
    scope :sort_by_popular, -> {
      joins(<<~SQL)
        LEFT JOIN LATERAL (
          SELECT AVG(r.rating) AS rating FROM ratings r
          WHERE r.recipe_id = recipes.id
          GROUP BY r.recipe_id
        ) AS r ON TRUE
      SQL
        .order("r.rating DESC")
    }
  end
end
