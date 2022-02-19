

text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.".split(" ")

print(sorted([i for i in text if i.isnumeric() and int(i) > 150]))



