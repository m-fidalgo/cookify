# Generated by Django 4.2 on 2023-04-27 23:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='updated_at',
        ),
    ]