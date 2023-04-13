from rest_framework import routers

from .views import ImageViewSet

image_router = routers.DefaultRouter()
image_router.register("images", ImageViewSet, "images")
urlpatterns = image_router.urls
