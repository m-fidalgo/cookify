class Recipes::RecipeWithDetailsSerializer < Recipes::RecipeSerializer
  attribute(:similar_recipes) do
    ActiveModelSerializers::SerializableResource
      .new(object.similar_recipes, each_serializer: Recipes::BasicRecipeSerializer)
  end
end
