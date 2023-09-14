from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class TaskSerializer(serializers.ModelSerializer):
    author = UserSerializer() 

    class Meta:
        model = Task
        fields = ['author', 'title', 'description', 'time_create', 'time_update', 'dead_line', 'status']