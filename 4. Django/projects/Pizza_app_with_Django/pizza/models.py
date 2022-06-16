from django.db import models

# Create your models here.

class Size(models.Model):
    SIZE =(
        ("None", "Choose.."),
        ('Small', 'Small'),
        ('Medium', 'Medium'),
        ('Large', 'Large'),
    )
    title = models.CharField(max_length=50, choices=SIZE)

    def __str__(self):
        return self.title





class Pizza(models.Model):

    topping1 = models.CharField(max_length=50)
    topping2 = models.CharField(max_length=50)
    size = models.ForeignKey(Size, related_name="pizza_size", on_delete=models.CASCADE)
    

    def __str__(self):
        return f"{self.topping1} {self.topping2} {self.size}"