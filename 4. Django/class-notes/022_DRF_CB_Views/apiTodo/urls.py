from django.urls import include, path

from apiTodo.views import TodoMVS
# from .views import home, hello_world, todoList, todoCreate, todoListCreate, todoUpdate, todoDelete


#! Funcion Based Views
"""
urlpatterns = [
    path('', home),
    path('hello/', hello_world),
    path('todolist/', todoList),
    path('todocreate/', todoCreate),
    path('todolistcreate/', todoListCreate),
    path('todoupdate/<int:pk>/', todoUpdate),
    path('tododelete/<int:pk>/', todoDelete),

]

"""
# from .views import home, TodoList, TodoDetail
#! Class Based Views
"""
urlpatterns = [
    path('', home),
    path("todolist/", TodoList.as_view(), name="todolist"),
    path("tododetail/<int:id>/", TodoDetail.as_view(), name="tododetail"),
]
"""

# from .views import home, TodoList
# from .views import home, TodoListCreate,TodoGetUpdateDelete


# urlpatterns = [
#     path('', home),
#     path("list/", TodoListCreate.as_view()),
#     path("detail/<int:id>", TodoGetUpdateDelete.as_view()),
# ]
from rest_framework import routers
from .views import TodoMVS

router = routers.DefaultRouter()
# router = routers.SimpleRouter()

router.register('todos', TodoMVS)

urlpatterns = [
    path('', include(router.urls)),
]


