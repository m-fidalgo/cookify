from apps.recipes.models import Recipe
from django.db import models
from utils.constants import Constants


class Ingredient(models.Model):
    text = models.CharField(max_length=Constants.max_char_field_length)
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
