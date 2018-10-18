from rest_framework import viewsets
from rest_framework.response import Response
from django.contrib.auth.models import User
from members.api.serializers import TaskUsersSerializer
from members.models import TaskUsers

class MembersViewSet(viewsets.ModelViewSet):
    serializer_class = TaskUsersSerializer
    queryset = TaskUsers.objects.all()    