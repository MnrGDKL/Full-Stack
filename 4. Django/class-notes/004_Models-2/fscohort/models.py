from pyexpat import model
from django.db import models

# Create your models here.
class Student(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  number = models.IntegerField()
  about = models.TextField(null=True, blank=True)
  avatar = models.ImageField(null=True, blank=True, upload_to="media/")
  register_date = models.DateTimeField(auto_now_add=True)
  update_date = models.DateTimeField(auto_now=True)


  def __str__(self):
    return f"{self.first_name.title()} {self.last_name.upper()}"

  class Meta():
    ordering = ["number"]
    verbose_name_plural = "Ogrenciler"
    # db_table = "students_Table"
  



