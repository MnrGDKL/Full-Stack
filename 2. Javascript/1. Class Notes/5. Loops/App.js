// lOOPS

/* 
let i = 0;
while (true) {
    console.log("Merhaba");

    i++;

    if (i == 5) {
        break;
    }
}
 */


/* 
let i = 3, sum = 0;

do {
    sum += i;
    i++;
} while (i < 6);
    console.log({sum}, {i});

 */

/* 
let i;

do {
    i = +prompt("Bir Sayı:");
    
} while (isNaN(i));

console.log({i}, "is a number");
 */

/* 
for (let index = 1; index <10; index++) {
    console.log(index);
    
}
 */

/* 
let array = ["Ankara", "İstanbul", "İzmir", "Sakarya"];
let i = 0, len = array.length;

for (; i < len; i++) {
    console.log(array[i]);
}
 */
/* 
var str = "clarsuway", 
    a = str.length,
    b = "";

for (let index = a-1; index >= 0; index--) {
    b += str[index];
}

console.log(b); // yawsuralc
 */
/* 
for (let i = 1; i <= 100.; i++) {
    if (i % 5 == 0) {
        continue;
    }
    console.log(i);
}
 */
/* 
while (true) {
    let x = prompt("Number: \n press q for exit")
    if (x == "q" || x == "Q") {
        break;
    } else if (isNaN(x)) {
        continue;
    } else {
        console.log(`2nd exponental of ${x} = ${x*x}`);
        break;
    }
}
 */