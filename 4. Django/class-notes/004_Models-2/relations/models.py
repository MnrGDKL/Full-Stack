from django.db import models

# Create your models here.
class Creator(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)

  def __str__(self):
    return f"{self.first_name.title()} {self.last_name.upper()}"

class Language(models.Model):
  name = models.CharField(max_length=50)
  creator = models.OneToOneField(Creator, on_delete=models.CASCADE)

  def __str__(self):
    return self.name

  
#! CASCAADE  - parent silinince silinir
#! SET_NULL  - parent silinince null yapar
#! PROTECT   - parent silinince hata verir
#! DO_NOTHING - parent silinince hiçbir şey yapmaz
#! SET_DEFAULT - parent silinince default değer atar
