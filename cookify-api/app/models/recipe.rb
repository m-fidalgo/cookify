class Recipe < ApplicationRecord
  belongs_to :creator, class_name: User.name.to_s

  has_many :ingredients, dependent: :destroy
  has_many :preparation_steps, dependent: :destroy

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
end
