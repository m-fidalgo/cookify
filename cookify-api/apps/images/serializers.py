from rest_framework import serializers
from utils.functions import attempt_json_deserialize

from .models import Image


class ImageSerializer(serializers.ModelSerializer):
    image_url = serializers.ReadOnlyField()

    class Meta:
        model = Image
        fields = ("id", "image_url", "image", "recipe")

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation.pop("image")

        return representation

    def create(self, validated_data):
        request = self.context["request"]
        validated_data["recipe_id"] = attempt_json_deserialize(
            request.data.get("recipe"), expect_type=int
        )
        return super().create(validated_data)
