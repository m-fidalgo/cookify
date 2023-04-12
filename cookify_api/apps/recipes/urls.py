from django.urls import path

from .views import RecipeCreateView, RecipeDetailView, RecipeUpdateView, RecipeDeleteView

urlpatterns = [
  path('', RecipeCreateView.as_view()),
  #path('<int:pk>', RecipeDetailView.as_view()),
  #path('<int:pk>', RecipeUpdateView.as_view()),
  path('<int:pk>', RecipeDeleteView.as_view()),
]