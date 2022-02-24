
def getProductArray(numbers):
    productOfNumbers = []
    for i in numbers:
        total = 1;
        for j in numbers: total *= j if i != j else 1
        productOfNumbers.append(total)
    return productOfNumbers

print(getProductArray([1, 2, 3, 4 ,5]))

