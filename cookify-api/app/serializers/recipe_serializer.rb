class RecipeSerializer < ApplicationSerializer
  attributes :id, :title, :time, :servings, :difficulty, :image_url

  has_one :creator, serializer: UserSerializer
  has_many :ingredients, each_serializer: IngredientSerializer
  has_many :preparation_steps, each_serializer: PreparationStepSerializer
  has_many :categories, each_serializer: CategorySerializer
end