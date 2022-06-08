from django.shortcuts import render
from decouple import config

def home(request):
    api_key = config('API_KEY')
    city = "London"
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={api_key}'
    
    import requests
    response = requests.get(url)
    weather = response.json()
    

    return render(request, 'weatherapp/home.html')