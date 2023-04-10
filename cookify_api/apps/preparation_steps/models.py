from django.db import models

class PreparationStep(models.Model):
  text = models.TextField()
  position = models.IntegerField()

  class Meta:
    db_table = "preparation_steps"

  def __str__(self):
    return self.text
