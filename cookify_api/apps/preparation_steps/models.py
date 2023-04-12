from django.db import models

from apps.recipes.models import Recipe

class PreparationStep(models.Model):
  text = models.TextField()
  position = models.IntegerField()
  recipe = models.ForeignKey(
    "recipes.Recipe",
    on_delete=models.CASCADE,
    default=Recipe.get_default_pk,
    related_name='preparation_steps'
  )

  class Meta:
    db_table = "preparation_steps"

  def __str__(self):
    return self.text
