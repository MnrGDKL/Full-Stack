from pyexpat import model
from django.db import models

# Create your models here.
class Student(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  number = models.IntegerField(null=True)

  def __str__(self):
    return self.first_name + " " + self.last_name
