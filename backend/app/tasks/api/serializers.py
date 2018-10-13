from rest_framework import serializers
from tasks.models import Task
from todo_list.api.serializers import TODOListSerializer

class TaskSerializer(serializers.ModelSerializer):

    # todo_list = TODOListSerializer()

    class Meta:
        model = Task
        fields = ('id','title', 'deadline')