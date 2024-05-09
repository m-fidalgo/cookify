class Recipes::BasicRecipeSerializer < ApplicationSerializer
  attributes :id, :title

  has_many :recipe_images, each_serializer: ImageSerializer, key: :images
end
