class Recipes::RecipeSerializer < Recipes::BasicRecipeSerializer
  attributes :time, :servings, :difficulty, :average_rating

  attribute(:is_liked) do
    current_user&.user_saved_recipes&.find_by(recipe_id: object.id)&.present?
  end

  has_one :creator, serializer: UserSerializer
  has_many :ingredients, each_serializer: IngredientSerializer
  has_many :preparation_steps, each_serializer: PreparationStepSerializer
  has_many :categories, each_serializer: CategorySerializer
end
