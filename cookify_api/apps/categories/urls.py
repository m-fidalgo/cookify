from rest_framework import routers

from .views import CategoryViewSet

category_router = routers.DefaultRouter()
category_router.register("categories", CategoryViewSet, "categories")
urlpatterns = category_router.urls
