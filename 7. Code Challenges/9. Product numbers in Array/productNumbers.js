/* 

This is an interview question asked by Uber.
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division? 

*/

function getProductArray(numbers){
    const productOfNumbers = [];
    numbers.forEach(num1 => { 
        let total = 1;
        numbers.forEach(num2 => {total *= num1 != num2 ? num2 : 1});
        productOfNumbers.push(total);
    });
    return productOfNumbers;
}

console.log(getProductArray([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(getProductArray([3, 2, 1])); // [2, 3, 6]
console.log(getProductArray([1, 4, 9, 25])); // [900, 225, 100, 36]



