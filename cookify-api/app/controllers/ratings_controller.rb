class RatingsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :find, :update, :destroy]


  def create
    create_params = create_rating_params.merge(user_id: current_user.id)
    rating = Rating.create!(create_params)

    render json: rating, serializer: RatingSerializer
  end


  def show
    rating = Rating.find(params[:rating_id])
    render json: rating, serializer: RatingSerializer
  rescue ActiveRecord::RecordNotFound
    raise Exceptions::RatingExceptions::RatingNotFound
  end


  def find
    rating = Rating.find_by(
      user_id: current_user.id,
      recipe_id: params[:recipe_id],
    )

    if rating.blank?
      render json: {rating: nil}
    else
      render json: rating, serializer: RatingSerializer
    end
  end


  def update
    rating = Rating.find(params[:rating_id])
    ensure_is_current_user!(rating.user_id)

    rating.update!(update_rating_params)

    render json: rating.reload, serializer: RatingSerializer
  rescue ActiveRecord::RecordNotFound
    raise Exceptions::RatingExceptions::RatingNotFound
  end


  def destroy
    rating = Rating.find(params[:rating_id])
    ensure_is_current_user!(rating.user_id)
    rating.destroy!

    render_success
  rescue ActiveRecord::RecordNotFound
    raise Exceptions::RatingExceptions::RatingNotFound
  end


  private def create_rating_params
    params.permit(:text, :rating, :recipe_id)
  end


  private def update_rating_params
    params.permit(:text, :rating)
  end
end
