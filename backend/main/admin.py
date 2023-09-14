from django.contrib import admin
from .models import *

class TaskAdmin(admin.ModelAdmin):
    list_display = ('id','time_create','time_update','dead_line','status')
    list_display_links = ('id','time_create','time_update','dead_line','status')
    search_fields = ('title','description')
    list_filters = ('time_create','time_update','dead_line','status')


admin.site.register(Task, TaskAdmin)