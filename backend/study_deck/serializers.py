from rest_framework import serializers
from .models import *


class StudyDeckSerializer(serializers.ModelSerializer):

    class Meta:
        model = StudyDeck
        fields = ('pk', 'word_phrase', 'definition', 'romanization', 'notes', 'word_image')