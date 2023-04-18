from django.db import models
from utils.constants import Constants


class Category(models.Model):
    name = models.CharField(max_length=Constants.max_char_field_length)

    class Meta:
        db_table = "categories"

    def __str__(self):
        return self.name
