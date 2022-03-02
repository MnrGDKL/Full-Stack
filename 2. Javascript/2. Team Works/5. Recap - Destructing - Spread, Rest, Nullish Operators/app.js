
// ************************
// * OBJECT DESTRUCTION
// ************************
/* 
let Öğrenci = {
      Adı         : "Sercan",
      Soyadı      : "Yılmaz",
      Yaş         : 15,
      
      Anne        :{
            Adı    : "Ayşe",
            Soyadı : "Yılmaz",
            Yaş    : 32,   
      },

      Baba        :{
            Adı   : "Taner",
            Soyadı: "Yılmaz",
            Yaş   : 36,
      }
} */

/* console.log(Öğrenci.Adı);
console.log(Öğrenci.Anne.Adı);
console.log(Öğrenci["Adı"]);
console.log(Öğrenci["Anne"]["Adı"]);
 */
/* 
let Anne_Adı = Öğrenci.Anne.Adı;
let Anne_Yaşı = Öğrenci.Anne.Yaş;

console.log(Anne_Adı);
console.log(Anne_Yaşı);*/


/* 
let { Soyadı:ögr_soyadı, Yaş:öğr_yaş, Adı:öğr_adı } = Öğrenci;

console.log(öğr_adı);
 */

// ************************
// * ARRAY DESTRUCTION
// ************************

/* let arr = [1,2,5,"a"]; */

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];



// let [a,,c] = arr;

// console.log(a, c);
/* 

let arr2 = [1, 2, 3, ["a", "b", "c"], 6, 7, [8,9]] 
let [,,,[,,x]] = arr2;
console.log(x);

let y = arr2[3][2];
console.log(y);

let [_1,_2,,[, _4_2,],_5, , [,_7_2]] = arr2;

console.log(_7_2); */




// ************************
// * DEFAULT PARAMETER
// ************************
/* 

function square(n = 0, k = 1, ...others){
      console.log("n:",n);
      console.log("k:",k);
      console.log("others:",others);

}

square(10, 20, 2,3,5);

 */

// ************************
// * SPREAD OPERATOR
// ************************

let arr = [1,2,5,"a"];
let arr2 = [1, 2, 3, ["a", "b", "c"], 6, 7, [8,9]];

let arr3 = [...arr2, ...arr];
/* console.log(arr3); */
let [arr4] = arr;

/* console.log(arr);
arr4 = "aaa";
console.log(arr); */

/* arr3[0] = 111;
console.log(arr2);
console.log(arr3); */


let Sercan = {
      Adı         : "Sercan",
      Soyadı      : "Yılmaz",
      Yaş         : 15,
      
      Anne        :{
            Adı    : "Ayşe",
            Soyadı : "Yılmaz",
            Yaş    : 32,   
      },

      Baba        :{
            Adı   : "Taner",
            Soyadı: "Yılmaz",
            Yaş   : 36,
      }
} 

/* 
let Kardes = {
      Adı    : "Ayla",
      Soyadı : Sercan.Soyadı,
      Yaş    : 12,

      Anne   : Sercan.Anne,
      Baba   : Sercan.Baba,
}
 */
/* 
let Kardes = {
      ...Sercan,
      Adı : "Ayla",
      Yaş : 12,
}


let {Adı, ...others} = Sercan;
let A = Sercan;

others.Adı = "Ahmet";

A.Adı = "A"; */
// console.log(Sercan.Adı);
/* 
let arr2 = [1, 2, 3, ["a", "b", "c"], 6, 7, [8,9]];
let  [a,b, ...arr5] = arr2;

a = 111;
console.log(arr2);

console.log(arr5); */

/* console.log(others); */

// let {Soyadı, ...diger} = Sercan;

// console.log(others);

// console.log(diger);

// diger.Adı = "ALi";
// console.log("Diğer: ",diger.Adı);
// console.log("Others: ",others.Adı);
// console.log("Sercan: ",Sercan.Adı);
/*  

let {Adı:Ahmet} = Sercan;
Ahmet = "Yeni İsim Ahmet";
console.log(Sercan.Adı);

 */

// ************************
// * REST OPERATOR
// ************************

function sum(...sayılar){
      console.log(sayılar);
      let total = 0;
      for (let i = 0; i < sayılar.length; i++) {
            total += sayılar[i];     
      }
      return total;
}
/* 
 console.log(sum(1,2,3,4,5,6,7,8,9)); */



// ************************
// * NULLISH OPERATOR
// ************************

/* let note = null;

console.log(note);

console.log(note ? note : "Notunuz Yoktur");

console.log(note ?? "Notunuz Yoktur"); */

const obj = {
      a: {
        b: { key: 'Some Value' },
          },
        d:{ key: 'My value',}
      };

console.log(obj.a.b.key); // 'Some Value'
// console.log(obj.a.c.key); // error, breaks the execution
console.log(obj.a.c?.key); // undefined, does not break the execution
console.log(obj);
