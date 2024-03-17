module Exceptions::AuthExceptions
  class NotAuthenticated < Exceptions::Errors
    def message
      "not authenticated"
    end
  end


  class NotAuthorized < Exceptions::Errors
    def message
      "not authorized"
    end
  end


  class IncorrectPassword < NotAuthenticated
    def message
      "incorrect password"
    end
  end
end
