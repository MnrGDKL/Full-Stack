import os
os.system('cls' if os.name == 'nt' else 'clear')

# def print_type(data):
#   for i in data:
#     print(i, type(i))

# test = [122, "Hello", True, [1, 2, 3], {1,2,3}, lambda x:x]
# print_type(test)

# class person:
#   name = "John"
#   age = 30

# person1 = person()
# person2 = person()

# print(person1.name)
# print(person2.name)

# person.job = "Programmer"
# print(person1.job)

# #! Class attributes vs instance attributes
# person1.location = "New York"
# print(person2.location)

#! SELF keyword

# class person:
#   name = "John"
#   age = 30

#   def test(self):
#     print("test")

#   def set_details(self, name, age):
#     self.name = name
#     self.age = age

#   def get_details(self):
#     print(self.name, self.age)
  


# person1 = person()
# person1.test() # test 
# person.test(person1) # test

# person1.get_details()

# person1.set_details("Barry", 45)
# person1.get_details()


#! Static methods

# class Person:
#   company = "Clarusway"

#   def set_details(self, name, age):
#     self.name = name
#     self.age = age

#   def get_details(self):
#     print(self.name, self.age)

#   @staticmethod
#   def salute():
#     print("Hi there!")

# person1 = Person()
# person1.salute()

#! Special Methods

# class Person:
#   company = "Clarusway"

#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
  
#   #? __str__ method
#   def __str__(self):
#     return f"{self.name}, {self.age}"

#   def get_details(self):
#     print(self.name, self.age)

# person1 = Person("Ahmet", 30)
# person1.get_details()


# liste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# print(liste)
# print(person1)
# print(person1.__str__())


#! Encapsulation and Abstraction

class Person:
  company = "Clarusway"

  def __init__(self, name, age):
    self.name = name
    self.age = age
    self._id = 12345  #! protected method
    self.__id2 = 4213  #! private method

  def __str__(self):
    return f"{self.name}, {self.age}"

  def get_details(self):
    print(self.name, self.age)

person1 = Person("Ahmet", 30)
print(person1._id)
# print(person1.__id2)

print(person1._Person__id2)
print(person1.__dict__)

liste =  [4,2,9,11,5]
liste.sort()
print(liste)

#! Inheritance and Polymorphism



