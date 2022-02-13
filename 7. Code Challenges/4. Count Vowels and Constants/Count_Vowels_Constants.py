string = input("String: ")
vowelsInStr = [i for i in string if i in "aeıioöuü"]
constantsInStr = [i for i in string if i in "bcçdfgğhjklmnprsştvyzqwx"]
print(f"Vowels:   {len(vowelsInStr)}")
print(f"Constants: {len(constantsInStr)}")