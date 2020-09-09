from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import *
from .serializers import *

@api_view(['GET', 'POST'])
def study_deck_list(request):
    if request.method == 'GET':
        data = StudyDeck.objects.all()

        serializer = StudyDeckSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StudyDeckSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'DELETE'])
def study_deck_detail(request, pk):
    try:
        study_deck = StudyDeck.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = StudyDeckSerializer(study_deck)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        study_deck.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)