import cloudinary
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser
from rest_framework.viewsets import ModelViewSet
from utils.constants import Actions

from .models import Image
from .serializers import ImageSerializer


class ImageViewSet(ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = ImageSerializer
    parser_classes = (MultiPartParser,)
    queryset = Image.objects.all()

    def get_permissions(self):
        if (
            self.action == Actions.LIST_ACTION.value
            or self.action == Actions.GET_ACTION.value
        ):
            return [permissions.AllowAny()]

        return super().get_permissions()

    def perform_destroy(self, instance):
        cloudinary.uploader.destroy(instance.image.public_id, invalidate=True)
        instance.delete()
