from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models

from utils.constants import Constants

from apps.recipes.models import Recipe
from .managers import UserManager

class User(AbstractBaseUser, PermissionsMixin):
  email = models.EmailField(max_length=Constants.max_char_field_length, unique=True)
  name = models.CharField(max_length=Constants.max_char_field_length)
  created_at = models.DateTimeField(auto_now_add=True)
  saved_recipes = models.ManyToManyField(Recipe)

  USERNAME_FIELD = "email"
  REQUIRED_FIELDS = []

  objects = UserManager()

  class Meta:
    db_table = "users"


  def __str__(self):
    return self.name