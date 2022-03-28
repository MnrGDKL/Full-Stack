//!  This is an interview question asked by Airbnb.
//!  Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

//? For example,
//? [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5.
//? [5, 1, 1, 5] should return 10, since we pick 5 and 5.


const largestNonAdjacent = (arr) => {
  let n = arr.length;
  let maxNum = 0;
  if (n == 1) return arr[n-1];
  if (n == 2) return Math.max(arr[n-1],arr[n-2]);
  else {
   maxNum = Math.max(largestNonAdjacent(arr.slice(0, n-1)), 
                     arr[n-1] + largestNonAdjacent(arr.slice(0,n-2))
                    );
  }
  return maxNum;
}

console.log(largestNonAdjacent([2, 4, 6, 2, 5]));       // 2 + 6 + 5 = 13
console.log(largestNonAdjacent([5, 1, 1, 5]));          // 5 + 5     = 10
console.log(largestNonAdjacent([2, 4, 3, 1, 2, 8 ,5])); // 4 + 1 + 8 = 13
console.log(largestNonAdjacent([1, 0, 3, 9, 2]));       // 1 + 9     = 10



