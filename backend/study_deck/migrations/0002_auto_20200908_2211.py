# Generated by Django 3.1.1 on 2020-09-08 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('study_deck', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studydeck',
            name='word_image',
            field=models.ImageField(default='default.jpg', null=True, upload_to='word_images'),
        ),
    ]