from django.db import models

status_choices = (
    ('N','not completed yet'), 
    ('C','completed'),    
    ('F','fail'),    
    ('D','delayed'),    
)

class Task(models.Model):
    title = models.CharField('Title', max_length=250)
    description = models.TextField('Description')
    time_create = models.DateTimeField('Time of creating', auto_now_add=True)
    time_update = models.DateTimeField('Time of last update', auto_now=True)
    dead_line = models.DateTimeField('Time of dead line')
    status = models.CharField(max_length=1,choices=status_choices)
