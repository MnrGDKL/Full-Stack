word        = input("Word        :")
seperator   = input("Seperator   :")
repeat      = int(input("Repetition :"))

wordArray   = [word for i in range(repeat)]
print(seperator.join(wordArray))

