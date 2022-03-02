
"""  
This is an interview question asked by Amazon.
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

"""

def longestPiece(s, k):
    longest = s[0:k]
    for i in range(len(s)):
        for j in range(len(s), i + k-1,-1):
            if (len(set(s[i:j+1])) == k and len(s[i:j+1]) > len(longest)):
                longest = s[i:j+1]
    print("Longest: ", longest)

longestPiece("abcba", 2)       # Longest : bcb
longestPiece("abcba", 3);       # Longest : abcba
longestPiece("abbccaabba", 2);  # Longest : aabba

