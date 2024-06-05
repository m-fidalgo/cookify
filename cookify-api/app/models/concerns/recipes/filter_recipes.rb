module Recipes::FilterRecipes
  extend ActiveSupport::Concern

  # rubocop:disable Metrics/BlockLength
  included do
    scope :saved_by_user, ->(user_id) {
      return all if user_id.blank?

      joins(:user_saved_recipes).where(user_saved_recipes: {user_id: user_id})
    }

    scope :search_by_categories, ->(category_ids) {
      return all if category_ids.blank?

      joins(:recipe_categories).where(recipe_categories: {category_id: category_ids}).distinct
    }

    scope :search_by_creator, ->(creator_id) {
      creator_id.present? ? where(creator_id: creator_id) : all
    }

    scope :search_by_difficulties, ->(difficulties) {
      difficulties.present? ? where(difficulty: difficulties) : all
    }

    scope :search_by_servings, ->(servings) {
      servings.present? ? where("servings ILIKE ?", "%#{servings}%") : all
    }

    scope :search_by_text, ->(text) {
      return all if text.blank?

      joins(:ingredients)
        .where(<<~SQL, {filter: "%#{text}%"})
          recipes.title ILIKE :filter OR ingredients.keywords ILIKE :filter OR ingredients.text ILIKE :filter
        SQL
        .distinct
    }

    scope :search_by_time, ->(time) {
      time.present? ? where(time: time) : all
    }

    scope :include_ingredients, ->(to_include) {
      return all if to_include.blank?

      joins(:ingredients)
        .where(<<~SQL, {filter: to_include.join("|")})
          ingredients.text ~* :filter OR ingredients.keywords ~* :filter
        SQL
        .distinct
    }

    scope :exclude_ingredients, ->(to_exclude) {
      return all if to_exclude.blank?

      filter = "'#{to_exclude.join('|')}'"
      joins(<<~SQL)
        LEFT JOIN ingredients i ON recipes.id = i.recipe_id
        AND (i.text ~* #{filter} OR i.keywords ~* #{filter})
      SQL
        .where("i.id IS NULL")
        .distinct
    }
  end
  # rubocop:enable Metrics/BlockLength
end
