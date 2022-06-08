from email import message
from pprint import pprint
from urllib import response
from django.shortcuts import redirect, render
from decouple import config
import requests
from django.contrib import messages
from .models import City

def home(request):
    api_key = config('API_KEY')
    city =  request.GET.get('city')
    if city:
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={api_key}'
        r = requests.get(url)
        if r.ok:
            
            weather_data = r.json()
            weather = {
                'city' : weather_data['name'],
                'temperature' : weather_data['main']['temp'],
                'description' : weather_data['weather'][0]['description'],
                'icon' : weather_data['weather'][0]['icon'],
            }
            r_city = weather_data['name']
            
            if City.objects.filter(name=r_city).exists():
                messages.warning(request, 'City already exists')
            else:
                City.objects.create(name=r_city)
                messages.success(request, 'City added successfully')
                context = {
                    'weather' : weather,
                }

                return redirect('home')
        else:
            messages.error(request, 'City not found')
        return redirect('home')
    city_data = []
    cities = City.objects.all()
    for city in cities:
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city.name}&units=metric&appid={api_key}'
        r = requests.get(url)
        content = r.json()
        data = {
            'city' : city,
            'temperature' : content['main']['temp'],
            'description' : content['weather'][0]['description'],
            'icon' : content['weather'][0]['icon'],
        }
        city_data.append(data)
    pprint(city_data)
    context = {
        'city_data' : city_data,
    }
    return render(request, 'weatherapp/home.html', context)

def delete_city(request, id):
    City.objects.get(id=id).delete()
    messages.success(request, 'City deleted successfully')
    return redirect('home')