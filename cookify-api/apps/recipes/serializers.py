from apps.categories.serializers import CategorySerializer
from apps.images.serializers import ImageSerializer
from apps.ingredients.models import Ingredient
from apps.ingredients.serializers import IngredientSerializer
from apps.preparation_steps.models import PreparationStep
from apps.preparation_steps.serializers import PreparationStepSerializer
from apps.users.models import User
from apps.users.serializers import UserSerializer
from rest_framework import serializers
from utils.exceptions import (
    IngredientNotInRecipeException,
    PreparationStepNotInRecipeException,
)
from utils.functions import attempt_json_deserialize

from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(read_only=True, many=True)
    creator = UserSerializer(read_only=True)
    ingredients = IngredientSerializer(read_only=True, many=True)
    preparation_steps = PreparationStepSerializer(read_only=True, many=True)
    images = ImageSerializer(read_only=True, many=True)
    is_liked = serializers.BooleanField(default=False)

    class Meta:
        model = Recipe
        fields = (
            "id",
            "title",
            "time",
            "servings",
            "difficulty",
            "is_liked",
            "creator",
            "ingredients",
            "categories",
            "preparation_steps",
            "images",
        )

    def create(self, validated_data):
        request = self.context["request"]
        validated_data["categories"] = attempt_json_deserialize(
            request.data.get("categories"), expect_type=list
        )
        validated_data["creator_id"] = attempt_json_deserialize(
            request.data.get("creator"), expect_type=int
        )
        recipe = super().create(validated_data)

        ingredients_data = attempt_json_deserialize(
            request.data.get("ingredients"), expect_type=list
        )
        for data in ingredients_data:
            Ingredient.objects.create(recipe=recipe, **data)

        preparation_steps_data = attempt_json_deserialize(
            request.data.get("preparation_steps"), expect_type=list
        )
        for data in preparation_steps_data:
            PreparationStep.objects.create(recipe=recipe, **data)

        return recipe

    def update(self, instance, validated_data):
        request = self.context["request"]
        validated_data["categories"] = attempt_json_deserialize(
            request.data.get("categories"), expect_type=list
        )
        recipe = super().update(instance, validated_data)

        ingredients_data = attempt_json_deserialize(
            request.data.get("ingredients"), expect_type=list
        )
        for data in ingredients_data:
            if Ingredient.objects.get(pk=data["id"]).recipe_id != recipe.pk:
                raise IngredientNotInRecipeException()

            Ingredient.objects.filter(pk=data["id"]).update(**data)

        preparation_steps_data = attempt_json_deserialize(
            request.data.get("preparation_steps"), expect_type=list
        )
        for data in preparation_steps_data:
            if PreparationStep.objects.get(pk=data["id"]).recipe_id != recipe.pk:
                raise PreparationStepNotInRecipeException()

            PreparationStep.objects.filter(pk=data["id"]).update(**data)

        return recipe


class RecipeWithLikedSerializer(RecipeSerializer):
    class Meta:
        model = Recipe
        fields = super
