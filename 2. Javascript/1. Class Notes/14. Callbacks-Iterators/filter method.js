//* ======================================================
//*                   FILTER() METHOD
//* ======================================================

const words = ["mum", "kek", "gel", "ısı", "iyi"];

const isPal = words.filter((word)=>
    word == word.split("").reverse().join(""));
console.log(isPal); 

//! Output:
//? [ 'mum', 'kek', 'ısı', 'iyi' ]
//

words
    .filter((word)=>word == word.split("").reverse().join(""))
    .map((word)=> word.toUpperCase())
    .forEach((word)=> console.log(word));

//!   Output: 
//?     MUM
//?     KEK
//?     ISI
//?     IYI
