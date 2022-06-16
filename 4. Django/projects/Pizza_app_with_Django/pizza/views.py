from unicodedata import name
from django.shortcuts import render
from .forms import PizzaForm

# Create your views here.

def home(request):
    return render(request, "pizza/home.html")
    
def order(request):
   form = PizzaForm()
   
   context = {
       "form" : form,
   }
   return render(request, "pizza/order.html", context)

def pizzas(request):
    number = int(request.GET["number"])
    print("number:", number)
    number_pizza = [1 for i in range(number)]
    print("number_pizza:", number_pizza)
    return render(request, "pizza/pizzas.html", {"number_pizza": number_pizza})


