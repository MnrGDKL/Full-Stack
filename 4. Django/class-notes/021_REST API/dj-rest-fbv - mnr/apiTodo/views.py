from pprint import pprint
from django.http.response import HttpResponse
from django.shortcuts import render



# Create your views here.
def home(request):
    return HttpResponse(
        '<center><h1 style="background-color:powderblue;">Welcome to ApiTodo</h1></center>'
    )

#! Restful APIs

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer


@api_view()
def api_root(request):
    return Response({
        'todos': '/todos/',
        'users': '/users/',
    })

@api_view(["GET"])
def todoList(request):
    todos = Todo.objects.all()
    pprint(todos)
    serializer = TodoSerializer(todos, many=True)
    pprint(serializer.data)
    return Response(serializer.data)

@api_view(["POST"])
def todoCreate(request):
    serializer = TodoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

# @api_view(["GET","POST"])
# def todoUpdate(request, pk):
#     try:
#         todo = Todo.objects.get(pk=pk)
#     except Todo.DoesNotExist:
#         return Response(status=404)
#     if request.method == 'GET':
#         serializer = TodoSerializer(todo)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         serializer = TodoSerializer(todo, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)

@api_view(["PUT"])
def todoUpdate(request, pk):
    try:
        todo = Todo.objects.get(pk=pk)
    except Todo.DoesNotExist:
        return Response(status=404)
    serializer = TodoSerializer(instance=todo, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


    
@api_view(["DELETE"])
def todoDelete(request, pk):
    try:
        todo = Todo.objects.get(pk=pk)
    except Todo.DoesNotExist:
        return Response(status=404)
    todo.delete()
    return Response(status=204)
    


