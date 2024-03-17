class User < ApplicationRecord
  include Users::ValidatesUserData

  has_secure_password
end
