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
    
    def create(self, validated_data):
        author_data = validated_data.pop('author')  
        author, _ = User.objects.get_or_create(**author_data)  
        task = Task.objects.create(author=author, **validated_data) 
        return task