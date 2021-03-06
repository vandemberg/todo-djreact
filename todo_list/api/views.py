from rest_framework import authentication, permissions
from rest_framework.response import Response
from todo_list.models import TODOList
from .serializers import TODOListSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

from rest_framework import viewsets

class TODOListViewSet(viewsets.ModelViewSet):

    serializer_class = TODOListSerializer
    queryset = TODOList.objects.exclude(title__isnull=True).exclude(title__exact='')
    authentication_classes = (SessionAuthentication, BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated,)

    def create(self, request, format=None):

        onwer = request.user.id
        title = request.data['title']
        
        todo_list = TODOList(title=title, onwer=User.objects.get(id=onwer))
        todo_list.save()

        return Response(TODOListSerializer(todo_list).data)