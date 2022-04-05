console.log('» index.js is running');

import square, { WHW, WORKING_HOURS_WEEK as hrs, dec, inc, sum } from './mymodule.js';
// import { default as square, WHW, WORKING_HOURS_WEEK as hrs, dec, inc, sum } from './mymodule.js';

console.log('WHW :>> ', WHW);
console.log('hrs :>> ', hrs);
console.log('square(10) :>> ', square(10));

inc(4);
inc(6);
dec();
console.log('dec() :>> ', dec());
console.log('sum(3,15) :>> ', sum(3, 15));
inc();
