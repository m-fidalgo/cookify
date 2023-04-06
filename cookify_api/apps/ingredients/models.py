from django.db import models

from utils.constants import Constants


class Ingredient(models.Model):
  
  class Meta:
    db_table = "ingredients"


  text = models.CharField(max_length=Constants.max_char_field_length)
