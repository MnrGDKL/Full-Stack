

def GCD(num1, num2):
    divisors = [i for i in range(2,min(num1,num2)+1) if (num1%i==0 and num2%i==0)]
    return max(divisors)

print(f"GCD: {GCD(90,120)}") # 30
print(f"GCD: {GCD(50,100)}") # 50
print(f"GCD: {GCD(45,78)}")  # 3

