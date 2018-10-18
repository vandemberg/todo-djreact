from rest_framework import viewsets
from rest_framework.response import Response
from django.contrib.auth.models import User
from members.api.serializers import TaskUsersSerializer
from members.models import TaskUsers

class MembersViewSet(viewsets.ModelViewSet):
    serializer_class = TaskUsersSerializer
    queryset = TaskUsers.objects.all()

    
    def list(self, request, format=None):
        user_id = request.GET["user_id"]
        task_id = request.GET["task_id"]

        result = TaskUsers.objects.filter(user_id=user_id).filter(task_id=task_id).first()
        return Response(TaskUsersSerializer(result).data)