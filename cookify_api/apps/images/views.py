from rest_framework.parsers import MultiPartParser
from rest_framework.viewsets import ModelViewSet

from .models import Image
from .serializers import ImageSerializer


class ImageViewSet(ModelViewSet):
    serializer_class = ImageSerializer
    parser_classes = (MultiPartParser,)
    queryset = Image.objects.all()
