// ***********************
// *    setTimeout()
// ***********************

/* 
let id = setTimeout(() => {
  console.log('» async programming is amazing');
}, 2000);
console.log(id);
clearTimeout(id);
console.log('continuing...');
let id2 = setTimeout(() => {
  console.log('»22 async programming is amazing');
}, 2000);
console.log(id2);
 */

//? an example

// const slowTask = () => {
//   let i = 0;
//   let result = { firstName: 'John', lastName: 'Doe' };
//   do {
//     i++;
//     // some long operation
//   } while (i < 1_000_000_000);
//   return result;
// };

// function wait(ms) {
//   const start = new Date().getTime();
//   let end = start;
//   while (end < start + ms) {
//     end = new Date().getTime();
//   }
// }

// console.log('» A..1');
// wait(3000); // 1 second wait
// console.log('» ...2');
// // setTimeout(() => {
// //   let res = slowTask();
// //   console.log(res);
// // });
// alert('!');
// console.log('» ...3');
// console.log('» ...4');

// //? synchronous example
// console.time('»» olc');
// console.log('hello');
// wait(1500);
// console.timeLog('»» olc');
// console.log('world');
// console.timeEnd('»» olc');


//? another example
// console.time('»» setTimeout example');
// console.timeLog('»» setTimeout example');

// setTimeout(() => {
//   console.warn('this is the first message');
//   console.timelog('»» setTimeout example');
// }, 1000);
// setTimeout(() => {
//   console.warn('this is the second message');
//   console.timeLog('»» setTimeout example');
// }, 2000);
// setTimeout(() => {
//   console.warn('this is the third message');
//   console.timeEnd('»» setTimeout example');
// }, 3000);

// ***********************
// *    setInterval()
// ***********************

// let count = 11;
// let interval = setInterval(() => {
//     count--;
//     console.log(count);
//     if (count === 1) {
//         clearInterval(interval);
//         console.log("TIME IS OVER");}
// }, 1000);


// ***********************
// *    Promise()
// ***********************

new Promise()