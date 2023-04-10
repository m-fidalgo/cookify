from django.db import models

from apps.categories.models import Category
from apps.ingredients.models import Ingredient
from apps.preparation_steps.models import PreparationStep
from utils.constants import Constants

class Difficulty(models.IntegerChoices):
  EASY = 0
  MEDIUM = 1
  HARD = 2

class Recipe(models.Model):
  title = models.CharField(max_length=Constants.max_char_field_length)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  time = models.IntegerField()
  servings = models.CharField(max_length=Constants.max_char_field_length)
  difficulty = models.IntegerField(choices=Difficulty.choices)
  categories = models.ManyToManyField(Category)
  ingredients = models.ManyToManyField(Ingredient)
  preparation_steps = models.ManyToManyField(PreparationStep)

  class Meta:
    db_table = "recipes"


  def __str__(self):
    return self.title
