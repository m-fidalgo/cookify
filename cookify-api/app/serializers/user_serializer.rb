class UserSerializer < ApplicationSerializer
  attributes :id, :name, :email, :vegetarian, :vegan, :celiac, :lactose_intolerant
end
