from rest_framework import serializers
from tasks.models import Task
from django.contrib.auth.models import User
from members.api.serializers import TaskUsersSerializer
from rest_auth.serializers import UserDetailsSerializer


class TaskSerializer(serializers.ModelSerializer):

    users = UserDetailsSerializer(read_only=True, many=True)

    class Meta:
        model = Task
        fields = ('id','title', 'deadline', 'todo_list', 'users')