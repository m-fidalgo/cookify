import cloudinary
from rest_framework import serializers

from .models import Image


class ImageSerializer(serializers.ModelSerializer):
    image_url = serializers.ReadOnlyField()

    class Meta:
        model = Image
        fields = ("id", "image_url", "image", "recipe_id")

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation.pop("image")

        return representation

    def delete(self, instance):
        cloudinary.uploader.destroy(instance.image.public_id, invalidate=True)
        super().delete(instance)

        return "OK"