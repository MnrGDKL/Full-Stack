
/* 
This is an interview question asked by Amazon.
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

 */

function longestPiece(s){
    let longest = s.slice(0,1);
    for (let i = 0; i <= s.length; i++) {
        for (let j = s.length; j >= i; j--) {
            longest = (new Set(s.slice(i,j)).size == s.slice(i,j).length 
                    && s.slice(i,j).length > longest.length) 
                    ? s.slice(i,j) : longest;
        }
    }
    console.log(`The answer is "${longest}", with the length of ${longest.length}.`);
}

longestPiece("abcabcbb");   // The answer is "abc", with the length of 3.
longestPiece("bbbbb");      // The answer is "b", with the length of 1.
longestPiece("pwwkew");     // The answer is "wke", with the length of 3.

