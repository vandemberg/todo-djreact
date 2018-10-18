from django.db import models
from django.contrib.auth.models import User
from todo_list.models import TODOList

class Task(models.Model):

    title     = models.CharField(max_length=120)
    todo_list = models.ForeignKey(TODOList, related_name='tasks', on_delete=models.CASCADE)
    deadline  = models.DateField()
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.title