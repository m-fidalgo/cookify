class Recipes::RecipeSerializer < Recipes::BasicRecipeSerializer
  attributes :time, :servings, :difficulty, :average_rating

  has_one :creator, serializer: UserSerializer
  has_many :ingredients, each_serializer: IngredientSerializer
  has_many :preparation_steps, each_serializer: PreparationStepSerializer
  has_many :categories, each_serializer: CategorySerializer
end
