class UserMenu < ApplicationRecord
  belongs_to :user
  belongs_to :breakfast, class_name: Recipe.name.to_s
  belongs_to :lunch, class_name: Recipe.name.to_s
  belongs_to :dinner, class_name: Recipe.name.to_s
end
