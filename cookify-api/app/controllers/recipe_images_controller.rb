class RecipeImagesController < ApplicationController
  before_action :authenticate_user!

  def destroy
    image = RecipeImage.find(params[:image_id])
    ensure_is_current_user!(image.recipe.creator_id)

    Cloudinary::Uploader.destroy("recipes/#{image.name}")
    image.destroy!

    render_success
  end
end
