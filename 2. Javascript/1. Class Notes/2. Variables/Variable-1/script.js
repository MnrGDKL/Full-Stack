var x = 7, y = 5;

console.log({x});
console.log({y});
y = x;
console.log({y});

var a = "Global";
console.log(a);
{
    let a = "Scope";
    console.log(a);
    a = "New-Scope"
    console.log(a);
}

console.log(a);

console.log(typeof a);
console.log(typeof string);
console.log(typeof null);
console.log(typeof typeof 5);

console.log('She said, "Go ahead"');
console.log("He said, \"I am a new programmer.\"");

var merhaba = "Merhaba";
var selam = " Sanada Selam"
var name = "Münir"

console.log(`${merhaba}, ${name}, ${selam}`); // Bu özellik sadece backtip (çift AltGr + virgül tuşları - ``) kullanılınca oluyor.


var x = 5, y = 6;
console.log(Boolean(x > y));    // false
console.log(Boolean(""));       // false
console.log(Boolean(" "));      // true
console.log(Boolean(3 == 5));   // false
console.log(Boolean(0));        // false
console.log(Boolean("0"));      // true
var s;
console.log(Boolean(s));        // false
console.log(Boolean(null));     // false
console.log(Boolean(typeof null)); // true
console.log(null == false);// false
console.log(null == true); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(2 == "2"); // true
console.log(2 === "2"); // false
console.log(2 + "2");  // 22
console.log(2 + +"2");  // 4
console.log(2 + "2");  // 22




