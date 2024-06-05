class RecipesController < ApplicationController
  before_action :authenticate_user!,
                only: [:create, :update, :destroy, :upload_image, :save, :unsave, :recommended]

  DEFAULT_SORT_COLUMN = "created_at".freeze
  DEFAULT_SORT_DIRECTION = "ASC".freeze

  def create
    create_params = recipe_params.merge(creator_id: current_user.id)
    recipe = Recipe.create!(create_params)

    create_ingredients!(recipe)
    create_preparation_steps!(recipe)
    create_recipe_categories!(recipe)

    render json: recipe, serializer: Recipes::RecipeSerializer
  end


  def show
    recipe = Recipe.find(params[:recipe_id])
    render json: recipe, serializer: Recipes::RecipeWithDetailsSerializer
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

    render json: recipe.reload, serializer: Recipes::RecipeSerializer
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
    recipes = recipes.saved_by_user(current_user.id) if search_params[:liked] == "true"
    recipes = recipes.search_by_categories(search_params[:category_ids])
    recipes = recipes.search_by_creator(search_params[:creator_id])
    recipes = recipes.search_by_difficulties(search_params[:difficulties])
    recipes = recipes.search_by_servings(search_params[:servings])
    recipes = recipes.search_by_text(search_params[:filter])
    recipes = recipes.search_by_time(search_params[:time])
    recipes = recipes.include_ingredients(search_params[:included_ingredients])
    recipes = recipes.exclude_ingredients(search_params[:excluded_ingredients])

    sort_by = search_params[:sort_by] || DEFAULT_SORT_COLUMN
    sort_direction = search_params[:sort_direction] || DEFAULT_SORT_DIRECTION

    recipes = if sort_by == "popular"
                recipes.sort_by_popular
              else
                recipes.order(sort_by => sort_direction)
              end

    render_paginated(recipes, Recipes::BasicRecipeSerializer)
  end


  def ratings
    recipe = Recipe.find(params[:recipe_id])
    render json: recipe.ratings, each_serializer: RatingSerializer
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

    render json: recipe.reload, serializer: Recipes::RecipeSerializer
  end


  def save
    current_user.user_saved_recipes.create!(recipe_id: params[:recipe_id])
    render_success
  end


  def unsave
    current_user.user_saved_recipes.find_by(recipe_id: params[:recipe_id]).destroy!
    render_success
  end


  def recommended
    recipes = current_user.recommended_recipes
    render json: recipes, each_serializer: Recipes::BasicRecipeSerializer
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
    params.permit(:creator_id, :filter, :liked, :servings, :time, :sort_by, :sort_direction,
                  category_ids: [], included_ingredients: [], excluded_ingredients: [],
                  difficulties: [])
  end


  private def image_params
    params.permit(:image)
  end
end
