from rest_framework import generics

from .models import Recipe
from .serializers import RecipeSerializer

class RecipeCreateView(generics.CreateAPIView):
  queryset = Recipe.objects.all()
  serializer_class = RecipeSerializer

class RecipeDetailView(generics.RetrieveAPIView):
  queryset = Recipe.objects.all()
  serializer_class = RecipeSerializer

class RecipeUpdateView(generics.UpdateAPIView):
  queryset = Recipe.objects.all()
  serializer_class = RecipeSerializer

class RecipeDeleteView(generics.DestroyAPIView):
  queryset = Recipe.objects.all()
  serializer_class = RecipeSerializer
