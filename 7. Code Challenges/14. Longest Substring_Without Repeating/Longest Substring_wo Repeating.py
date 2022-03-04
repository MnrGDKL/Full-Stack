
"""  
This is an interview question asked by Amazon.
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

"""

def longestPiece(s):
    longest = s[0]
    for i in range(len(s)):
        for j in range(len(s), i-1 ,-1):
            if (len(set(s[i:j+1])) == len(s[i:j+1]) and len(s[i:j+1]) > len(longest)):
                longest = s[i:j+1]

    print(f'The answer is "{longest}", with the length of {len(longest)}.')

longestPiece("abcabcbb")   # The answer is "abc", with the length of 3.
longestPiece("bbbbb");     # The answer is "b", with the length of 1.
longestPiece("pwwkew");    # The answer is "wke", with the length of 3.

