from django.db import models
from django.contrib.auth.models import User

status_choices = (
    ('C','completed'),    
    ('N','not completed yet'),    
    ('F','fail'),    
    ('D','delayed'),    
)
# Create your models here.

class Task(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField('Title', max_length=250)
    description = models.TextField('Description')
    time_create = models.DateTimeField('Time of creating', auto_now_add=True)
    time_update = models.DateTimeField('Time of last update', auto_now=True)
    dead_line = models.DateTimeField('Time of dead line')
    status = models.CharField(max_length=1,choices=status_choices)
