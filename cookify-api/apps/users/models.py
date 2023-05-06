from apps.recipes.models import Recipe
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from utils.constants import Fields

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        max_length=Fields.MAX_CHAR_FIELD_LENGTH.value, unique=True
    )
    name = models.CharField(max_length=Fields.MAX_CHAR_FIELD_LENGTH.value)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    saved_recipes = models.ManyToManyField(Recipe)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    class Meta:
        db_table = "users"

    def __str__(self):
        return self.name
