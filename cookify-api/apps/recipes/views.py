from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from utils.constants import Actions

from .models import Recipe
from .serializers import RecipeSerializer


class RecipeViewSet(ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def get_permissions(self):
        if (
            self.action == Actions.LIST_ACTION.value
            or self.action == Actions.GET_ACTION.value
        ):
            return [permissions.AllowAny()]

        return super().get_permissions()
