from django.urls import path
from .views import *

urlpatterns = [
    path('', TaskView.as_view(),name='main'),
    path('create_task/', CreateTaskView.as_view(), name='create_task'),
    path('update_task/<int:pk>/', UpdateTaskView.as_view(), name='update_task'),
    path('remove_task/<int:pk>/', RemoveTaskView.as_view(), name='remove_task'),
]