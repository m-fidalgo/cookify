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
  end
  # rubocop:enable Metrics/BlockLength
end
