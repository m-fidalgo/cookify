module Users::ValidatesUserData
  extend ActiveSupport::Concern

  included do
    validates :email, presence: {message: "email can't be empty"}
    validates :email, uniqueness: {message: "email already exists"}
    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP, message: "is not an email"}

    validates :name, presence: {message: "name can't be empty"}
  end
end
