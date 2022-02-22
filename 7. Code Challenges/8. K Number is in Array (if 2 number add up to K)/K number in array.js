const array = [10, 15, 3, 7];

function K_inArray(k){
    let first;
    let result = false;
    for (const i of array) {
        first = i;
        if (array.includes(k-first) && k-first != i) {result = true; break;}
    }
    return result;
}

console.log(K_inArray(17)); // true (10 + 7)
console.log(K_inArray(13)); // true (10 + 3)
console.log(K_inArray(17)); // true (10 + 7)
console.log(K_inArray(20)); // false



