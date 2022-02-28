def stairCase(n):
    cases = [list(str(i)) for i in range(1,int("1"*n)+1) \
                  if len(list(str(i))) >= round(n/2) \
                 and sum(map(int,list(str(i)))) == n \
                 and "0" not in list(str(i)) \
                 and "3" not in list(str(i)) \
                 and "4" not in list(str(i)) \
                 and "5" not in list(str(i)) \
                 and "6" not in list(str(i)) \
                 and "7" not in list(str(i)) \
                 and "8" not in list(str(i)) \
                 and "9" not in list(str(i))]
    
    print(f"Number of Unique Ways:  {len(cases)}\n")
    steps = 0
    for i in cases:
        steps += 1
        print(f"{steps}:\t{', '.join(i)}")

stairCase(5)