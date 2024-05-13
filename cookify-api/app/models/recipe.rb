class Recipe < ApplicationRecord
  include Recipes::FilterRecipes
  include Recipes::SortRecipes
  include Recipes::ManagesSimilarities
  include Publisher

  belongs_to :creator, class_name: User.name.to_s

  has_many :ingredients, dependent: :destroy
  has_many :preparation_steps, dependent: :destroy
  has_many :ratings, dependent: :destroy
  has_many :recipe_images, dependent: :destroy

  has_many :recipe_categories, dependent: :destroy
  has_many :categories, through: :recipe_categories

  has_many :user_saved_recipes, dependent: :destroy
  has_many :users, through: :user_saved_recipes

  validates :creator, presence: {message: "creator can't be empty"}
  validates :difficulty, presence: {message: "difficulty can't be empty"}
  validates :time, presence: {message: "time can't be empty"}
  validates :title, presence: {message: "title can't be empty"}

  enum difficulty: {
    easy: "easy",
    medium: "medium",
    hard: "hard",
  }


  def average_rating
    ratings.average(:rating)
  end


  def similar_recipes
    Recipe.where(id: similar_ids)
  end
end
