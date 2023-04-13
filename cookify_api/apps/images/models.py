from apps.recipes.models import Recipe
from cloudinary.models import CloudinaryField
from decouple import config
from django.db import models
from utils.constants import Constants


class Image(models.Model):
    image = CloudinaryField("image")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    recipe = models.ForeignKey(
        "recipes.Recipe",
        on_delete=models.CASCADE,
        default=Recipe.get_default_pk,
        related_name="images",
    )

    class Meta:
        db_table = "images"

    @property
    def image_url(self):
        return (
            f"{Constants.cloudinary_url}/{config('CLOUDINARY_CLOUD_NAME')}/{self.image}"
        )

    def __str__(self):
        return self.image_url
