Rails.application.routes.draw do
  scope :auth do
    post "/login" => "auth#login"
  end

  scope :users do
    post "/" => "users#create"
    get "/:user_id" => "users#show", user_id: /\d+/
  end
end
