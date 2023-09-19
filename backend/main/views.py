from django.shortcuts import render
from django.views.generic import ListView
from .models import *
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, UpdateAPIView
from .serializer import *
from rest_framework.response import Response
from .forms import *
from rest_framework import status

class RemoveTaskView(APIView):
    def delete(self, request, pk):
        try:
            task = Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            return Response({'detail': 'Task not found.'}, status=status.HTTP_404_NOT_FOUND)

        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TaskView(APIView):
    def get(self, request):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class CreateTaskView(CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class UpdateTaskView(UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)  
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

