# BASE SETUP

```bash
# CREATING VIRTUAL ENVIRONMENT
# windows
py -m venv env
# windows other option
python -m venv env
# linux / Mac OS
vitualenv env

# ACTIVATING ENVIRONMENT
# windows
.\env\Scripts\activate
# linux / Mac OS
source env/bin/activate

# PACKAGE INSTALLATION
# if pip does not work try pip3 in linux/Mac OS
pip install django
# alternatively python -m pip install django

pip freeze > requirements.txt
django-admin --version
django-admin startproject main .
```

go to terminal

```bash
py manage.py runserver
```

click the link with CTRL key pressed in the terminal and see django rocket.

go to terminal, stop project, add app

```
py manage.py startapp users
```

go to settings.py and add 'users' app to installed apps and add below lines

```python
import os

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # my apps
    'users',
]
```

go to users.views.py

```python
from django.shortcuts import render, redirect, HttpResponse

# Create your views here.

def home(request):
    return HttpResponse('<h1>Hello World!</h1>')

def users_view(request):
    return HttpResponse('<h1>Users Page</h1>')
```

go to main/urls.py

```python
from django.contrib import admin
from django.urls import path, include
from users.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('users/', include('users.urls')),
] 
```

go to users.urls.py

```python
from django.urls import path
from .views import users_view

urlpatterns = [
    path('', users_view, name='users'),
]
```

## gitignore

add a gitignore file at same level as env folder, and check that it includes .env and /env lines

go to terminal

```bash
py manage.py makemigrations
py manage.py migrate
py .\manage.py createsuperuser
py manage.py runserver
```

navigate to http://localhost:8000/admin/
