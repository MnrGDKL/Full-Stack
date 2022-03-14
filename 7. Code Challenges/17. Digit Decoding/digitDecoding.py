
#! This is an interview question asked by Facebook.
#! Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
#! For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
#! You can assume that the messages are decodable. For example, '001' is not allowed.


def countDigitDecoding(digits):
    n = len(digits)
    if (n == 0 or n == 1): return 1
    if (digits[0] == "0"): return (f'"{digits}" is not allowed')
    count = 0
    if (int(digits[n-1]) > 0): count = countDigitDecoding(digits[:n-1])
    if (digits[n-2] == "1" or (digits[n-2] == "2" and digits[n-1] < "7")):
        count += countDigitDecoding(digits[:n-2])
    return count


print(countDigitDecoding("111"));     #? Output: 3 ==> aaa, ak, ka
print(countDigitDecoding("2222"));    #? Output: 5 ==> bbbb, bbv, bvb, vbb, vv 
print(countDigitDecoding("33333"));   #? Output: 1 ==> ccccc
print(countDigitDecoding("001"));     #? Output: "001" is not allowed