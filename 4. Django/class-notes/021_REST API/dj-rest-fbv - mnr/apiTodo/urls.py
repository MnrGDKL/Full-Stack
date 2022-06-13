from django.urls import path
from .views import home, api_root, todoList, todoCreate


urlpatterns = [
    path('', home),
    path("api/", api_root),
    path("todolist/", todoList),
    path("todocreate/", todoCreate),
    
]
