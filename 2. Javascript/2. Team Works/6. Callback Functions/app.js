console.log(Array.from(new Array(5)));

console.log(Array.from({ length: 5 }));

console.log(Array.from({ length: 5 }, (_, j) => j*j % 2 == 0 ? j*j : 1 ));