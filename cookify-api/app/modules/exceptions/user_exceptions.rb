module Exceptions::UserExceptions
  class UserNotFound < Exceptions::Errors
    def message
      "user not found"
    end
  end
end
