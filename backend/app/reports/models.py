from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Report(models.Model):

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    date  = models.DateField()
    url   = models.CharField(max_length=250) 

    def __str__(self):
        return self.date
