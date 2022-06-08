from django.shortcuts import render
from decouple import config
from pprint import pprint

def home(request):
    api_key = config('API_KEY')
    city = "Kars"
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={api_key}'
    
    import requests
    r = requests.get(url)
    if r.ok:
        weather_data = r.json()
        pprint(weather_data)
        weather = {
            'city' : weather_data['name'],
            'temperature' : weather_data['main']['temp'],
            'description' : weather_data['weather'][0]['description'],
            'icon' : weather_data['weather'][0]['icon'],
        }
        context = {
            'weather' : weather,
        }
        return render(request, 'weatherapp/home.html', context)
    else:
        print('Request failed')
        return render(request, 'weatherapp/home.html')