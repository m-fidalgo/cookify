class RecipesController < ApplicationController
  before_action :authenticate_user!,
                only: [:create, :update, :destroy, :upload_image, :save, :unsave]

  def create
    create_params = recipe_params.merge(creator_id: current_user.id)
    recipe = Recipe.create!(create_params)

    create_ingredients!(recipe)
    create_preparation_steps!(recipe)
    create_recipe_categories!(recipe)

    render json: recipe, serializer: RecipeSerializer
  end


  def show
    recipe = Recipe.find(params[:recipe_id])
    render json: recipe, serializer: RecipeSerializer
  rescue ActiveRecord::RecordNotFound
    raise Exceptions::RecipeExceptions::RecipeNotFound
  end


  def update
    recipe = Recipe.find(params[:recipe_id])
    ensure_is_current_user!(recipe.creator_id)

    recipe.update!(recipe_params)

    ActiveRecord::Base.transaction do
      recipe.ingredients.destroy_all
      create_ingredients!(recipe)
      recipe.preparation_steps.destroy_all
      create_preparation_steps!(recipe)
      recipe.recipe_categories.destroy_all
      create_recipe_categories!(recipe)
    end

    render json: recipe.reload, serializer: RecipeSerializer
  rescue ActiveRecord::RecordNotFound
    raise Exceptions::RecipeExceptions::RecipeNotFound
  end


  def destroy
    recipe = Recipe.find(params[:recipe_id])
    ensure_is_current_user!(recipe.creator_id)
    recipe.destroy!

    render_success
  rescue ActiveRecord::RecordNotFound
    raise Exceptions::RecipeExceptions::RecipeNotFound
  end


  def search
    recipes = Recipe.all
    recipes = recipes.saved_by_user(current_user.id) if search_params[:liked] == true
    recipes = recipes.search_by_categories(search_params[:category_ids])
    recipes = recipes.search_by_creator(search_params[:creator_id])
    recipes = recipes.search_by_difficulties(search_params[:difficulties])
    recipes = recipes.search_by_servings(search_params[:servings])
    recipes = recipes.search_by_text(search_params[:filter])
    recipes = recipes.search_by_time(search_params[:time])
    recipes = recipes.order(:created_at)

    render_paginated(recipes, RecipeSerializer)
  end


  def ratings
    recipe = Recipe.find(params[:recipe_id])
    render_paginated(recipe.ratings, RatingSerializer)
  end


  def upload_image
    recipe = Recipe.find(params[:recipe_id])
    ensure_is_current_user!(recipe.creator_id)

    image = RecipeImage.create!(recipe_id: recipe.id)
    response = Cloudinary::Uploader.upload(
      image_params[:image],
      public_id: image.name,
      folder: "recipes",
    )
    image.update!(url: response["secure_url"])

    render json: recipe.reload, serializer: RecipeSerializer
  end


  def save
    current_user.user_saved_recipes.create!(recipe_id: params[:recipe_id])
    render_success
  end


  def unsave
    current_user.user_saved_recipes.find_by(recipe_id: params[:recipe_id]).destroy!
    render_success
  end


  private def create_ingredients!(recipe)
    recipe_info_params[:ingredients].each do |ingredient|
      recipe.ingredients.create!(text: ingredient)
    end
  end


  private def create_preparation_steps!(recipe)
    recipe_info_params[:steps].each_with_index do |step, index|
      recipe.preparation_steps.create!(text: step, position: index)
    end
  end


  private def create_recipe_categories!(recipe)
    recipe_info_params[:category_ids].each do |category_id|
      recipe.recipe_categories.create!(category_id: category_id)
    end
  end


  private def recipe_params
    params.permit(:title, :time, :servings, :difficulty)
  end


  private def recipe_info_params
    params.permit(ingredients: [], steps: [], category_ids: [])
  end


  private def search_params
    params.permit(:creator_id, :filter, :liked, :servings, :time,
                  category_ids: [], difficulties: [])
  end


  private def image_params
    params.permit(:image)
  end
end
