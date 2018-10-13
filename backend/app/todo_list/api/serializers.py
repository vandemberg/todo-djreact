from rest_framework import serializers
from todo_list.models import TODOList

class TODOListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TODOList
        fields = ('id','title')