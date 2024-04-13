class CategoriesController < ApplicationController
  def search
    categories = Category.all
    render_paginated(categories, CategorySerializer)
  end
end
