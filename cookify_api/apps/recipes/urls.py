from rest_framework import routers

from .views import RecipeViewSet

recipe_router = routers.DefaultRouter()
recipe_router.register("recipes", RecipeViewSet, "recipes")
urlpatterns = recipe_router.urls
