
def findMissingNumbers(array):
    numbers    = sorted([i for i in set(array) if i >= 0])
    counter    = numbers[0]
    missingNum = 0

    for i in range(1, len(numbers)-1):
        counter += 1
        if counter != numbers[i]:
            missingNum = counter;
            break    
    
    print(f" First Missing Number: {numbers[-1] + 1 if missingNum == 0 else missingNum}")



findMissingNumbers([3, 4, -1, 1])   # First Missing Number:2
findMissingNumbers([1, 2, 0])       # First Missing Number:3



