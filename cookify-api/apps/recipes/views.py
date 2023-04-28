from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from utils.constants import Constants

from .models import Recipe
from .serializers import RecipeSerializer


class RecipeViewSet(ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    
    def get_permissions(self):
        print(self.action)
        if self.action == Constants.list_action or Constants.get_action:
            return [permissions.AllowAny()]
        return super().get_permissions()
