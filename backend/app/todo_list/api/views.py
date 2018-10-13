from todo_list.models import TODOList
from .serializers import TODOListSerializer

from rest_framework import viewsets

class TODOListViewSet(viewsets.ModelViewSet):
    serializer_class = TODOListSerializer
    queryset = TODOList.objects.all()