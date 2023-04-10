from django.db import models

from utils.constants import Constants

class Ingredient(models.Model):
  text = models.CharField(max_length=Constants.max_char_field_length)

  class Meta:
    db_table = "ingredients"

  def __str__(self):
    return self.text
