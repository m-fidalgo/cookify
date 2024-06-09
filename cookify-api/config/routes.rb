Rails.application.routes.draw do
  scope :auth do
    post "/login" => "auth#login"
  end

  scope :users do
    post "/" => "users#create"
    get "/:user_id" => "users#show", user_id: /\d+/
    patch "/:user_id" => "users#update", user_id: /\d+/
    delete "/:user_id" => "users#destroy", user_id: /\d+/
    get "/recommended-recipes" => "users#recommended_recipes"
    get "/menu" => "users#menu"
  end

  scope :recipes do
    post "/" => "recipes#create"
    post "/search" => "recipes#search"
    get "/:recipe_id" => "recipes#show", recipe_id: /\d+/
    get "/:recipe_id/ratings" => "recipes#ratings", recipe_id: /\d+/
    patch "/:recipe_id" => "recipes#update", recipe_id: /\d+/
    delete "/:recipe_id" => "recipes#destroy", recipe_id: /\d+/
    post "/:recipe_id/image" => "recipes#upload_image", recipe_id: /\d+/
    post "/:recipe_id/save" => "recipes#save", recipe_id: /\d+/
    delete "/:recipe_id/unsave" => "recipes#unsave", recipe_id: /\d+/
  end

  scope :ratings do
    post "/" => "ratings#create"
    get "/:rating_id" => "ratings#show", rating_id: /\d+/
    get "/find/:recipe_id" => "ratings#find", recipe_id: /\d+/
    patch "/:rating_id" => "ratings#update", rating_id: /\d+/
    delete "/:rating_id" => "ratings#destroy", rating_id: /\d+/
  end

  scope :categories do
    get "/" => "categories#search"
  end

  scope :images do
    delete "/:image_id" => "recipe_images#destroy"
  end
end
