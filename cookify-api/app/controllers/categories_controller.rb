class CategoriesController < ApplicationController
  def search
    categories = Category.all
    render_paginated(categories, "categories", CategorySerializer)
  end
end
