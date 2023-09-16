from django.shortcuts import render
from django.views.generic import ListView
from .models import *
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, UpdateAPIView
from .serializer import *
from rest_framework.response import Response
from rest_framework import status
from .forms import *

def index(request):
    return render(request,'main/index.html')

class Main(ListView):
    model = Task
    template_name = 'main/index.html'
    context_object_name = 'tasks'

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