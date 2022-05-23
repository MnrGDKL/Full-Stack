from django.urls import path
from .views import HomeView,student_list, student_add, student_detail, student_update,student_delete
from django.views.generic.base import TemplateView

urlpatterns = [
    # path('', home, name="home"),
    # path('',HomeView.as_view(), name="home"),
    path('',TemplateView.as_view(template_name="fscohort/home.html"), name="home"),

    path('student_list/', student_list, name="list"),
    path('student_add/', student_add, name="add"),
    path('detail/<int:id>/', student_detail, name="detail"),
    path('update/<int:id>/', student_update, name="update"),
    path('delete/<int:id>/', student_delete, name="delete"),
]