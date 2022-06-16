from django.urls import path
from .views import home, order, pizzas

urlpatterns = [
    path("", home, name="home"),
    path("order/", order, name="order"),
    path("pizzas/", pizzas, name="pizzas"),
]