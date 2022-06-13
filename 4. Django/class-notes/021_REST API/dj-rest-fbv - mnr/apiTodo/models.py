from django.db import models

# Create your models here.

class Todo(models.Model):

  TITLE = [
    ('L', 'Low'), 
    ('M', 'Medium'), 
    ('H', 'High')
    ]
  task = models.CharField(max_length=50)
  description = models.TextField()
  priority = models.CharField(max_length=50, choices=TITLE, default='L')
  done = models.BooleanField(default=False) 
  createdDate = models.DateTimeField(auto_now_add=True)
  updatedDate = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.task
    

