class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:update, :destroy]

  def create
    user = User.create!(user_params)
    token = encode_token(user_id: user.id)
    render json: user, serializer: UserWithTokenSerializer, token: token, status: :created
  end


  def show
    user = User.find(params[:user_id])
    render json: user, serializer: UserSerializer
  rescue ActiveRecord::RecordNotFound
    raise Exceptions::UserExceptions::UserNotFound
  end


  def update
    ensure_is_current_user!(params[:user_id])
    user = User.find(params[:user_id])
    user.update!(user_params)

    render json: user.reload, serializer: UserSerializer
  rescue ActiveRecord::RecordNotFound
    raise Exceptions::UserExceptions::UserNotFound
  end


  def destroy
    ensure_is_current_user!(params[:user_id])
    User.find(params[:user_id]).destroy!
    render_success
  rescue ActiveRecord::RecordNotFound
    raise Exceptions::UserExceptions::UserNotFound
  end


  private def user_params
    params.permit(:email, :name, :password)
  end
end
