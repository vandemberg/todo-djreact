from tasks.models import Task
from .serializers import TaskSerializer

serializer_class = TaskSerializer

from rest_framework import viewsets

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()