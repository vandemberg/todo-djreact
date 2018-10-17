from rest_framework import authentication, permissions
from rest_framework.response import Response
from todo_list.models import TODOList
from .serializers import TODOListSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from rest_framework import viewsets

class TODOListViewSet(viewsets.ModelViewSet):

    serializer_class = TODOListSerializer
    queryset = TODOList.objects.all()
    authentication_classes = (SessionAuthentication, BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated,)

    def list(self, request, format=None):
        return Response(TODOList.objects.all())

    def create(self, request, format=None):
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)