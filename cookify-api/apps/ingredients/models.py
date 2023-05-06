from apps.recipes.models import Recipe
from django.db import models
from utils.constants import Fields


class Ingredient(models.Model):
    text = models.CharField(max_length=Fields.MAX_CHAR_FIELD_LENGTH.value)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    recipe = models.ForeignKey(
        "recipes.Recipe",
        on_delete=models.CASCADE,
        default=Recipe.get_default_pk,
        related_name="ingredients",
    )

    class Meta:
        db_table = "ingredients"

    def __str__(self):
        return self.text
