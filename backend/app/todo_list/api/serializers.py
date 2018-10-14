from rest_framework import serializers
from todo_list.models import TODOList
from tasks.api.serializers import TaskSerializer

class TODOListSerializer(serializers.ModelSerializer):

    tasks = TaskSerializer(many=True, read_only=True)

    class Meta:
        model = TODOList
        fields = ('id','title','tasks')