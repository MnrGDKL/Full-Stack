//* ======================================================
//*                    MAP() METHOD
//* ======================================================


//* if a grade is less than 50, increase it by 20% oherwise
//* increase it by 10% and store all value in the grades array.
//*-------------------------------------------------------

let grades = [30, 50, 77, 38, 44, 80];

grades = grades.map((grade)=> grade <= 50 
                              ? grade * 1.2 
                              : grade * 1.1);

console.log(grades); // [ 36, 60, 84.7, 45.6, 52.8, 88 ]


//* Test the each item of the words array whether palindromic or not.
//* Return the result as an array which consists of true or
//* false values for each item
//*-------------------------------------------------------

const words = ["mum", "kek", "gel", "ısı", "iyi"];

const isPal = words.map((word)=> {
    let reversed = word.split("").reverse().join("");
    return reversed == word ? true : null;
});
console.log(isPal); // [ true, true, false, true, true ]