class RatingSerializer < ApplicationSerializer
  attributes :id, :text, :rating

  has_one :user, serializer: UserSerializer
end
