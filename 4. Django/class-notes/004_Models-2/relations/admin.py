from atexit import register
from django.contrib import admin
from .models import Creator, Language, Frameworks, Developer


admin.site.register(Creator)
admin.site.register(Language)
admin.site.register(Frameworks)
admin.site.register(Developer)

# Register your models here.
