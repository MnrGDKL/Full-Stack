from django.urls import path
from .views import path_api, student_api, student_api_get_update_delete

urlpatterns = [ 
    path("students/", student_api,),
    path("students/<int:pk>/", student_api_get_update_delete,),
    path("paths/", path_api,),
]

