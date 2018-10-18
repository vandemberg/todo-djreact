from rest_framework import serializers
from tasks.models import Task
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class TaskSerializer(serializers.ModelSerializer):

    users = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Task
        fields = ('id','title', 'deadline', 'todo_list', 'users')