
/*

This is an interview question asked by Google.
Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
10 = max(10, 5, 2) 
7 = max(5, 2, 7) 
8 = max(2, 7, 8)
8 = max(7, 8, 7)

*/


function maxOfSubArrays(array,k){
    for (let i = 0; i < array.length-k+1; i++) {
        console.log(Math.max(...array.slice(i, k + i)), `= max(${array.slice(i, k + i)})`); 
    }
}

maxOfSubArrays([10, 5, 2, 7, 8, 7], 3);