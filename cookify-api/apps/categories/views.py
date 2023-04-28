from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from utils.constants import Constants

from .models import Category
from .serializers import CategorySerializer


class CategoryViewSet(ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_permissions(self):
        print(self.action)
        if self.action == Constants.list_action:
            return [permissions.AllowAny()]
        return super().get_permissions()