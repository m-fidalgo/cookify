class UserWithTokenSerializer < UserSerializer
  attribute(:token) { instance_options[:token] }
end
