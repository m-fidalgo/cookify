from django.db import models

from utils.constants import Constants

from ..categories.models import Category
from ..ingredients.models import Ingredient
from ..preparation_steps.models import PreparationStep


class Recipe(models.Model):

  class Meta:
    db_table = "recipes"


  class Difficulty(models.IntegerChoices):
    EASY = 0
    MEDIUM = 1
    HARD = 2


  title = models.CharField(max_length=Constants.max_char_field_length)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  time = models.IntegerField()
  servings = models.CharField(max_length=Constants.max_char_field_length)
  difficulty = models.IntegerField(choices=Difficulty.choices)
  categories = models.ManyToManyField(Category)
  ingredients = models.ManyToManyField(Ingredient)
  preparation_steps = models.ManyToManyField(PreparationStep)


  def __str__(self):
    return self.title
