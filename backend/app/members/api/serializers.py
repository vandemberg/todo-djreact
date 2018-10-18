from rest_framework import serializers
from tasks.models import Task
from members.models import TaskUsers
from django.contrib.auth.models import User

class TaskUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskUsers
        fields = ('id','user', 'task')