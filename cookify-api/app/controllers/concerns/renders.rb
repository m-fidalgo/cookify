module Renders
  extend ActiveSupport::Concern

  included do
    rescue_from Exceptions::Errors, with: :render_error
    rescue_from Exceptions::AuthExceptions::NotAuthenticated, with: :render_not_authenticated
    rescue_from Exceptions::AuthExceptions::NotAuthorized, with: :render_forbidden
  end


  private def render_error_message(message:, status:)
    render json: {errors: message}, status: status
  end


  protected def render_error(error)
    render_error_message(message: error.message, status: :internal_server_error)
  end


  protected def render_not_authenticated(error)
    render_error_message(message: error.message, status: :unauthorized)
  end


  protected def render_forbidden(error)
    render_error_message(message: error.message, status: :forbidden)
  end


  protected def render_success
    render json: {status: "success"}, status: :success
  end
end
