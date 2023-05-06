from rest_framework.parsers import MultiPartParser
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from utils.constants import Constants

from .models import Image
from .serializers import ImageSerializer


class ImageViewSet(ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = ImageSerializer
    parser_classes = (MultiPartParser,)
    queryset = Image.objects.all()
    
    def get_permissions(self):
        if self.action == Constants.list_action or Constants.get_action:
            return [permissions.AllowAny()]
        return super().get_permissions()
