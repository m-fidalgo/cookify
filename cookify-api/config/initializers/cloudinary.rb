require "cloudinary"

API_KEY = ENV["CLOUDINARY_API_KEY"]
API_SECRET = ENV["CLOUDINARY_API_SECRET"]
CLOUD_NAME = ENV["CLOUDINARY_CLOUD_NAME"]

Cloudinary.config_from_url("cloudinary://#{API_KEY}:#{API_SECRET}@#{CLOUD_NAME}")
Cloudinary.config do |config|
  config.secure = true
end
