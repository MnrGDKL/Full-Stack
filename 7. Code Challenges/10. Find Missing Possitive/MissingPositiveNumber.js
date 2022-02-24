/* 
This is an interview question asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example: 
the input [3, 4, -1, 1] should give 2. 
The input [1, 2, 0] should give 3.
You can modify the input array in-place. 

*/
function findMissingNumber(array){
    const input = Array.from(new Set(array));
    const newInput = [];
    input.sort((a, b)=> a-b);
    input.forEach(i => { i >= 0 ? newInput.push(i): i;});
    let counter = newInput[0];
    let missingNum = 0;
    for (let i = 1; i < newInput.length; i++) {
        counter++;
        if (counter != newInput[i]){
            missingNum = counter; 
            break;}
    }

    console.log("First Missing Number:", missingNum == 0 
                                    ? newInput[newInput.length-1] + 1
                                    : missingNum);
}

findMissingNumber([3, 4, -1, 1]); // First Missing Number: 2




