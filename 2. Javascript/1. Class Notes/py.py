

words = ["mum", "kek", "gel", "ısı", "iyi"]
isPal = [True if (i == i[::-1]) else False for i in words]
print(isPal)   

# Output : [True, True, False, True, True]

