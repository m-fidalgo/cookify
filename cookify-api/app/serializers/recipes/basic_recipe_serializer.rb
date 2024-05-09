class Recipes::BasicRecipeSerializer < ApplicationSerializer
  attributes :id, :title

  has_many :recipe_images, serializer: ImageSerializer, key: :images
end
