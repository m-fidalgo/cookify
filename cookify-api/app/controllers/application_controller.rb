class ApplicationController < ActionController::API
  include Pagination
  include Renders

  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def current_user
    return unless decoded_token

    user_id = decoded_token[0]["user_id"]
    @user = User.find_by(id: user_id)
  end


  protected def encode_token(payload)
    JWT.encode(payload, SECRET_KEY)
  end


  protected def decoded_token
    header = request.headers["Authorization"]
    return unless header

    token = header.split(" ")[1]
    begin
      JWT.decode(token, SECRET_KEY)
    rescue JWT::DecodeError
      nil
    end
  end


  protected def authenticate_user!
    raise Exceptions::AuthExceptions::NotAuthenticated unless current_user
  end


  protected def ensure_is_current_user!(user_id)
    raise Exceptions::AuthExceptions::NotAuthorized unless current_user.id.to_i == user_id.to_i
  end
end
