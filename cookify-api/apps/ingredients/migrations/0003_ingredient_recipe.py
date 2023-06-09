# Generated by Django 4.2 on 2023-04-12 21:21

import apps.recipes.models
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("recipes", "0006_remove_recipe_ingredients_and_more"),
        ("ingredients", "0002_alter_ingredient_text"),
    ]

    operations = [
        migrations.AddField(
            model_name="ingredient",
            name="recipe",
            field=models.ForeignKey(
                default=apps.recipes.models.Recipe.get_default_pk,
                on_delete=django.db.models.deletion.CASCADE,
                to="recipes.recipe",
            ),
        ),
    ]
