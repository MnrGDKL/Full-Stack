

const text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.".split(" ");

let numbers = [];
for (const i of text) {if (+i > 150) { numbers.push(+i);}}
console.log(numbers.sort((a,b)=> a-b));

