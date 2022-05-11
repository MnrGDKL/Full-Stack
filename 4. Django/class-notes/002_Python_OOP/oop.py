import os
os.system('cls' if os.name == 'nt' else 'clear')

def print_type(data):
  for i in data:
    print(i, type(i))

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

class Person:
  company = "Clarusway"

  def set_details(self, name, age):
    self.name = name
    self.age = age

  def get_details(self):
    print(self.name, self.age)

  @staticmethod
  def salute():
    print("Hi there!")

person1 = Person()
person1.salute()



