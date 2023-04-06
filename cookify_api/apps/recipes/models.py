from django.db import models

max_char_field_length = 50

class Recipe(models.Model):
  class Meta:
    db_table = "recipes"

  class Difficulty(models.IntegerChoices):
    EASY = 0
    MEDIUM = 1
    HARD = 2

  title = models.CharField(max_length=max_char_field_length)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  time = models.IntegerField()
  servings = models.CharField(max_length=max_char_field_length)
  difficulty = models.IntegerField(choices=Difficulty.choices)

  def __str__(self):
    return self.title