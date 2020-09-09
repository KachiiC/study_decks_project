from django.db import models


class StudyDeck (models.Model):
    word_phrase = models.CharField(max_length=200)
    definition = models.CharField(max_length=200)
    romanization = models.CharField(max_length=200)
    notes = models.TextField()
    word_image = models.ImageField(default='default.jpg', upload_to='word_images', null=True)