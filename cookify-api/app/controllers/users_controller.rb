class UsersController < ApplicationController
  def create
    user = User.create!(user_params)
    token = encode_token(user_id: user.id)
    render json: {
      user: UserSerializer.new(user),
      meta: {token: token},
    }, status: :created
  end


  def show
    user = User.find(params[:user_id])
    render json: user
  rescue ActiveRecord::RecordNotFound
    raise Exceptions::UserExceptions::UserNotFound
  end


  private def user_params
    params.permit(:email, :name, :password)
  end
end
