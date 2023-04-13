from rest_framework import serializers

from .models import PreparationStep


class PreparationStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = PreparationStep
        fields = ("id", "text", "position")
