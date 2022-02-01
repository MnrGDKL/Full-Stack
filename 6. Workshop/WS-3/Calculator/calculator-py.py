
def calculator(operator, x, y):
    if (operator == "+"):
        return x + y
    elif (operator == "-") :
        return x - y
    elif (operator == "*") :
        return x * y
    elif (operator == "/") :
        return x / y
    else :
        return "Something Wrong!"


opr = input(""" 
    Hesap Makinesi:
    "+" : Toplama
    "-" : Çıkarma
    "*" : Çarpma
    "/" : Bölme
""")

num1 = int(input("Enter 1st Number: "))
num2 = int(input("Enter 2nd Number: "))

print(f"{num1} {opr} {num2} =", round(calculator(opr, num1, num2),2))