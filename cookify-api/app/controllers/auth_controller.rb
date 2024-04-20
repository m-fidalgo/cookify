class AuthController < ApplicationController
  def login
    user = User.find_by!(email: login_params[:email])
    authenticated = user.authenticate(login_params[:password])
    raise Exceptions::AuthExceptions::IncorrectPassword unless authenticated

    token = encode_token(user_id: user.id)
    render json: user, serializer: UserWithTokenSerializer, token: token, status: :created
  rescue ActiveRecord::RecordNotFound
    raise Exceptions::UserExceptions::UserNotFound
  end


  private def login_params
    params.permit(:email, :password)
  end
end
