from django import forms

status_choices = (
    ('C','completed'),    
    ('N','not completed yet'),    
    ('F','fail'),    
    ('D','delayed'),    
)

class TaskForm(forms.Form):
    title = forms.CharField(max_length=250)
    description = forms.CharField(widget=forms.Textarea)
    dead_line = forms.DateTimeField()
    status = forms.ChoiceField(choices=status_choices)
