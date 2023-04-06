from django.db import models

from utils.constants import Constants


class Category(models.Model):
  
  class Meta:
    db_table = "categories"


  name = models.CharField(max_length=Constants.max_char_field_length)
