module Recipes::ManagesSimilarities
  extend ActiveSupport::Concern

  included do
    after_save :publish_get_similarities, if: :should_fetch_similarities?
    after_destroy :remove_from_similar_ids
  end


  def publish_get_all_similarities
    publish(
      exchange_name: Publisher::EXCHANGES[:get_all_similarities],
      message: {
        recipe_id: id,
      },
    )
  end


  def publish_get_similarities
    publish(
      exchange_name: Publisher::EXCHANGES[:get_similarities],
      message: {
        recipe_id: id,
      },
    )
  end


  private def should_fetch_similarities?
    title_previously_changed? || (similar_ids_previously_changed? && similar_ids.length < 2)
  end


  private def remove_from_similar_ids
    recipes = Recipe.where("?=ANY(similar_ids)", id)
    return if recipes.blank?

    recipes.each do |recipe|
      recipe.update!(similar_ids: recipe.similar_ids - [id])
    end
  end
end
