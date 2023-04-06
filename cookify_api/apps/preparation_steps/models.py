from django.db import models

from utils.constants import Constants


class PreparationStep(models.Model):
  
  class Meta:
    db_table = "preparation_steps"


  text = models.TextField()
  position = models.IntegerField()
