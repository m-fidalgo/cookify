module Exceptions::RatingExceptions
  class RatingNotFound < Exceptions::Errors
    def message
      "rating not found"
    end
  end
end
