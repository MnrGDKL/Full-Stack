console.log(15+25);     // 40 
console.log(015+025);   // 34 -- 8li sayı sisteminde gösterdi.  01234567 015: 5*1 + 1*8 = 13 -- 025: 5*1 + 2*8 = 21 --> 13 + 21 = 34

var x = 0.1+0.2;
console.log(x); // 0.300000000004
console.log(x.toFixed(2));  // 0.30

console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991

var a = 2;
var b = a;
console.log({a},{b});

var a = 3;
console.log({a},{b});
