from django.db import models
from django.contrib.auth.models import User
from tasks.models import Task

class TaskUsers(models.Model):

    user = models.ForeignKey(User, related_name='tasks', on_delete=models.CASCADE)
    task = models.ForeignKey(Task, related_name='tasks', on_delete=models.CASCADE)    

    def __str__(self):
        return self.user

    class Meta:
        db_table = 'tasks_task_users'
        managed = False