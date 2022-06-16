# from asyncio import mixins
# from cgitb import lookup
from django.http.response import HttpResponse
# from django.shortcuts import get_object_or_404, render
# import rest_framework
# from rest_framework import serializers


# from rest_framework.decorators import api_view
# from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

# from rest_framework.views import APIView
# from rest_framework import status

# Create your views here.
def home(request):
    return HttpResponse(
        '<center><h1 style="background-color:powderblue;">Welcome to ApiTodo</h1></center>'
    )
#! Funcion Based Views
"""

@api_view()
def hello_world(request):
    return Response({"message": "Hello, world!"})

@api_view(['GET'])
def todoList(request):
    querset =  Todo.objects.all()    
    serializer = TodoSerializer(querset, many=True)
   
    return Response(serializer.data)


@api_view(['POST'])
def todoCreate(request):

    serializer = TodoSerializer(data = request.data)
    
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def todoListCreate(request):
    if request.method == "GET":
        querset =  Todo.objects.all()    
        serializer = TodoSerializer(querset, many=True)
    
        return Response(serializer.data)
    
    elif request.method == "POST":
        serializer = TodoSerializer(data = request.data)
    
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['GET','PUT', 'DELETE'])
def todoUpdate(request, pk):
    
    querset =  Todo.objects.get(id = pk)
    
    if request.method == "GET":
        serializer = TodoSerializer(querset)
    
        return Response(serializer.data)
        
    elif request.method == "PUT":
        
        serializer = TodoSerializer(instance=querset,  data = request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == "DELETE":
      
        querset.delete()
        return Response("Item Deleted")
        
    

@api_view(['DELETE'])
def todoDelete(request, pk):
    
    querset =  Todo.objects.get(id = pk)
    querset.delete()
    return Response("Item Deleted")
    
"""

#! Class Based Views
"""
class TodoList(APIView):
    def get(self, request):
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

class TodoDetail(APIView):

    def get_object(self, id):
        return get_object_or_404(Todo, id=id) 

    def get(self, request, id):
        todo = self.get_object(id)
        # todo = Todo.objects.get(id=id)
        serializer = TodoSerializer(todo)
        return Response(serializer.data)
    
    def put(self, request, id):
        todo = Todo.objects.get(id=id)
        serializer = TodoSerializer(instance=todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        todo = Todo.objects.get(id=id)
        todo.delete()
        data = {
            "message": "Todo Deleted"
        }

        return Response(data, status=status.HTTP_204_NO_CONTENT)

"""

# from rest_framework import mixins
# from rest_framework.generics import GenericAPIView

# class TodoList(mixins.ListModelMixin, mixins.CreateModelMixin,  GenericAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer

#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)
    
    
#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)

# from rest_framework.generics import ListCreateAPIView  

# class TodoListCreate(ListCreateAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer

# from rest_framework.generics import RetrieveUpdateDestroyAPIView

# class TodoGetUpdateDelete(RetrieveUpdateDestroyAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer
#     lookup_field = "id"

from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet

class TodoMVS(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer