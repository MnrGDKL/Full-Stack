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

function wait(ms) {
  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

// ***********************
// *    Promise()
// ***********************


//? Eaxmple-1

// let data = Math.floor(Math.random()*2);

// const promise = new Promise((resolve,reject)=>{
//   const succ = 5
//   const err = new Error("Failure!");
//   data == true ? resolve(succ) : reject(err);
// })

// promise
//   .then((positive_result)=>{
//     console.log(positive_result);
//     return positive_result*positive_result;
//   })
//   .then((sec_pos_res)=>{
//     console.log(sec_pos_res);
//   })
//   .catch((negative_result)=>{
//     console.log(negative_result);
//   })
//   .then(()=>{
//     console.log("data =",data);
//   })

//?Example-2
//? Çay Demleme

const cayDemle = ()=>{
  suyuKaynat()
  .then((durum1) => {
    console.log(durum1); //! durum1 = "Su Kaynadı"
    return cayEkle();  
  })
  .then((durum2)=>{
    console.log(durum2); //! durum2 = cayEkle() => "Çay Eklendi"
    bekle(1500);
    return afiyet();
  })
  .then((durum3)=>{
    console.log(durum3); //! durum3 = afiyet() => "Çayınız Demlendi, Afiyet Olsun!"
  })
  .catch((err) => {
    console.log(err); //! err = reject() => "Kettle Arızalı" || "Çay Bitmiş"
  });
}

const suyuKaynat = ()=>{
  return new Promise((resolve,reject)=>{
    const nasip = Math.floor(Math.random() * 3);
    if (nasip){
      bekle(1000);
      resolve("Su Kaynadı");
    }
    reject(new Error("Kettle Arızalı"));
  })
}

const cayEkle = ()=>{
  return new Promise((resolve,reject)=>{
    const cayNasibi = Math.floor(Math.random() * 3);
    if (cayNasibi) {
      bekle(500);
      resolve("Çay Eklendi");
    }
    reject("Çay Bitmiş!");
  });
}

const bekle = (ms)=>{
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

const afiyet = ()=>{
  return "Çayınız Demlendi, Afiyet Olsun!";
}


// cayDemle();

// ***********************
// *    Async() Await
// ***********************


const cayDemle2 = async () =>{
  try {
    const durum1 = await suyuKaynat(); console.log(durum1);   //! durum1 = resolve() => "Su Kaynadı"
    await bekle(1500);
    const durum2 = await cayEkle(); console.log(durum2);   //! durum2 = resolve() => "Çay Eklendi"
    await bekle(1500);
    const durum3 = await afiyet(); console.log(durum3);   //! durum3 = "Çayınız Demlendi, Afiyet Olsun!"
  } catch (error) { 
    console.error(error);   //! error = reject() => "Kettle Arızalı"
                            //! error = reject() =>  "Çay Bitmiş"
  }
}

cayDemle2();

