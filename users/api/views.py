from rest_auth.serializers import UserDetailsSerializer
from django.contrib.auth.models import User

from rest_framework import viewsets

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserDetailsSerializer

    