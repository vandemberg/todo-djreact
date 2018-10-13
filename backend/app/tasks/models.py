from django.db import models
from todo_list.models import TODOList

class Task(models.Model):

    title     = models.CharField(max_length=120)
    # todo_list = models.ForeignKey(TODOList, related_name='todo_list', on_delete=models.CASCADE)
    deadline  = models.DateField()

    def __str__(self):
        return self.title