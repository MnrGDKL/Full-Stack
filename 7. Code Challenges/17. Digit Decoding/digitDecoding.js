
//! This is an interview question asked by Facebook.
//! Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
//! For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
//! You can assume that the messages are decodable. For example, '001' is not allowed.


//  function countDigitDecoding(digits){
//     let n = digits.length;
//     // console.log("Sayı:", digits, "- n:",n);
//     if (digits[0] == "0") {return `"${digits}" is not allowed`;};
//     if (n == 0 || n == 1) {return 1};
    
//     //? For n > 1
//     let count = 0;
//     count = countDigitDecoding(digits.slice(0, n-1));
//     // console.log("Number:",digits.slice(0, n-1), "- Count:",count);
//     if (digits[n - 2] == "1" || (digits[n - 2] == '2'&& digits[n - 1] < '7')) {
//         count += countDigitDecoding(digits.slice(0, n-2))
//         // console.log("--Number:",digits.slice(0, n-1), "- Count:",count);
//     }
//     return count;
// }


// console.log(countDigitDecoding("111"));       //? Output: 3 ==> aaa, ak, ka
// console.log(countDigitDecoding("2222"));      //? Output: 5 ==> bbbb, bbv, bvb, vbb, vv 
// console.log(countDigitDecoding("33333"));     //? Output: 1 ==> ccccc
// console.log(countDigitDecoding("001"));       //? Output: "001" is not allowed
// console.log(countDigitDecoding("111112312")); //? Output: 42
// console.log(countDigitDecoding("1234"));      //? Output: 3
// console.log(countDigitDecoding("121"));       //? Output: 3

/*
//! Barry M's Solution

function countEncodings(s) {
    if (s.startsWith('0')) return 0;
    else if (s.length <= 1) return 1;
  
    let total = 0;
  
    if (+s.slice(0, 2) <= 26) total += countEncodings(s.slice(2));
  
    total += countEncodings(s.slice(1));
    return total;
  }
  console.log(countEncodings('111112312'));
  console.log(countEncodings('1234'));
  console.log(countEncodings('121'));
  */


// var findMissing = function(nums) {
//     let newnums = nums.sort((a,b) => a-b);
//     for (let i = 0; i < newnums.length; i++) {
//         if (newnums[i] !== newnums[i+1]-2) {
//             return newnums[i+1]-2;
//         }
//     }
// }	

// console.log(findMissing([1,3,5,7,9,13,15,17]));
// console.log(findMissing([9,7,3]));


// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }
//     , 1000+i);
// }

// var returmMax = function(nums) {


//     return Math.max(...nums);
// }

// console.log(returmMax([1,3,5,7,9,13,15,17]));

// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }
// , 0);
// Promise.resolve().then(() => {
//     console.log("3");
// }
// );
// console.log("4");

// let arr = [44, 30, 24, 32, 35, 30, 40, 38,15]


// function ArrayChallenge(arr) {
//   let profit = []
//   let start = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       arr = arr.slice(i, arr.length)
//       start++;
//       for (let i = 1; i < arr.length; i++) {
//         profit.push(arr[i] - arr[0])
//         // profit.push(Math.max(...arr) - Math.min(...arr))
//       }
//     }
//   }
//   return start == -1 ? -1 : Math.max(...profit);
// }
// console.log(ArrayChallenge(arr));

// function findNumber (arr,k) {
//   let count = 0
//   for (item of arr) {
//     if (item == k) {
//       count++;
//     }
//   }
//   return count > 0 ? "Yes" : "No";
// }

// console.log(findNumber([1,2,3,4,5,6,7,8,9,10],10));

// function oddNumbers(l,r){
//   let arr = [];
//   for (let i = l; i <= r; i++) {
//     i % 2 != 0 ? arr.push(i) : null; 
//   }
//   return arr;
// }

// console.log(oddNumbers(1,9));

// input Format
//The first line contains an integer, , the size of the array.
//The second line contains  space-separated integers that describe .
//Constraints
//1 < n < 100
//-100 < arr[i] < 100
//Output Format


function plusMinus (arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++){
      +arr[i] > 0 ? pos++ : +arr[i] < 0 ? neg++ : zero++;
  }
  return (pos/arr.length).toFixed(6) + "\n" + (neg/arr.length).toFixed(6) + "\n" + (zero/arr.length).toFixed(6);
}

let n = prompt("Enter the size of the array");
let arr = prompt("Enter the array elements separated by space").split(" ");
console.log(plusMinus(arr));

