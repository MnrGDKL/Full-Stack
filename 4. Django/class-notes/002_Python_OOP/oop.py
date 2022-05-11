from ast import Lambda
import os
os.system('cls' if os.name == 'nt' else 'clear')

def print_type(data):
  for i in data:
    print(i, type(i))

test = [122, "Hello", True, [1, 2, 3], {1,2,3}, lambda x:x]
# print_type(test)

class person:
  name = "John"
  age = 30

person1 = person()
person2 = person()

print(person1.name)
print(person2.name)

person.job = "Programmer"
print(person1.job)

#! Class attributes vs instance attributes
person1.location = "New York"
# print(person2.location)

#! SELF keyword

