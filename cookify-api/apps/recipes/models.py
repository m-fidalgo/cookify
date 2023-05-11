from apps.categories.models import Category
from django.db import models
from django.db.models import Count
from utils.constants import Fields


class Difficulty(models.IntegerChoices):
    EASY = 0
    MEDIUM = 1
    HARD = 2


class Recipe(models.Model):
    title = models.CharField(max_length=Fields.MAX_CHAR_FIELD_LENGTH.value)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    time = models.IntegerField()
    servings = models.CharField(max_length=Fields.MAX_CHAR_FIELD_LENGTH.value)
    difficulty = models.IntegerField(choices=Difficulty.choices)
    categories = models.ManyToManyField(Category)
    creator = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, blank=True, null=True
    )

    class Meta:
        db_table = "recipes"

    def __str__(self):
        return self.title

    @classmethod
    def get_default_pk(cls):
        exam, created = cls.objects.get_or_create(
            title="default recipe", time=0, difficulty=0
        )
        return exam.pk

    @classmethod
    def filter_by_recommended(self, queryset):
        return queryset.annotate(liked_by_count=Count("user")).order_by(
            "-liked_by_count"
        )

    @classmethod
    def filter_by_categories(self, queryset, category_ids):
        return queryset.filter(categories__pk__in=category_ids)
