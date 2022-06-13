from django.urls import path
from .views import home, api_root, todoList, todoCreate, todoUpdate


urlpatterns = [
    path('', home),
    path("api/", api_root),
    path("todolist/", todoList),
    path("todocreate/", todoCreate),
    path("todoupdate/<int:pk>/", todoUpdate),
    
]
