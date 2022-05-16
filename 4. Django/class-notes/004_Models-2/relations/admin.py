from atexit import register
from django.contrib import admin
from .models import Creator, Language


admin.site.register(Creator)
admin.site.register(Language)

# Register your models here.
