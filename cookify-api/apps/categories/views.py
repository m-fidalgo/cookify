from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from utils.constants import Actions

from .models import Category
from .serializers import CategorySerializer


class CategoryViewSet(ModelViewSet):
    permission_classes = (AllowAny,)
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
