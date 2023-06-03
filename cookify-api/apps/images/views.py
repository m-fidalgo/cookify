import cloudinary
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from utils.constants import Actions

from .models import Image
from .serializers import ImageSerializer


class ImageViewSet(ModelViewSet):
    permission_classes = (AllowAny,)
    serializer_class = ImageSerializer
    parser_classes = (MultiPartParser,)
    queryset = Image.objects.all()

    def perform_destroy(self, instance):
        cloudinary.uploader.destroy(instance.image.public_id, invalidate=True)
        instance.delete()
