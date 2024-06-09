class User < ApplicationRecord
  include Users::ManagesMenuRecommendation
  include Users::ManagesRecommendations
  include Publisher

  has_secure_password

  has_many :created_recipes,
           class_name: Recipe.name.to_s,
           dependent: :destroy,
           foreign_key: :creator_id,
           inverse_of: :creator

  has_many :user_saved_recipes, dependent: :destroy
  has_many :saved_recipes,
           class_name: Recipe.name.to_s,
           source: :recipe,
           through: :user_saved_recipes

  has_many :user_menus, dependent: :destroy, class_name: UserMenu.name.to_s

  validates :email, presence: {message: "email can't be empty"}
  validates :email, uniqueness: {message: "email already exists"}
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP, message: "is not an email"}

  validates :name, presence: {message: "name can't be empty"}

  def recommended_recipes
    Recipe.where(id: recommended_recipe_ids)
  end
end
