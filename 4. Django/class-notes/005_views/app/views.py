from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home_view(request):
    # html = "<html><body>Hello, World!</body></html>"
    # return HttpResponse(html)
    return HttpResponse("<h1>Hello, World!</h1>")

def special(request):
  context = {
        'title': 'clarusway',
        'dict1': {'django': 'best framework'},
        'my_list': [2, 3, 4]
    }
  return render(request, 'app/special.html', context)