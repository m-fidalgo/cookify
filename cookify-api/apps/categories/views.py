from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from utils.constants import Actions

from .models import Category
from .serializers import CategorySerializer


class CategoryViewSet(ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_permissions(self):
        if self.action == Actions.LIST_ACTION.value:
            return [permissions.AllowAny()]
        return super().get_permissions()
