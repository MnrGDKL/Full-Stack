//* ======================================================
//*                    NESTED ARRAY ITERATONS
//* ======================================================

let personels = [
    {
      id: 1,
      name: "Ali",
      surname: "Yılmaz",
      job: "developer",
      age: 30,
      salary: 5000,
    },
    {
      id: 2,
      name: "Ayşe",
      surname: "Yılmaz",
      job: "tester",
      age: 35,
      salary: 3000,
    },
    {
      id: 3,
      name: "Mehmet",
      surname: "Öztürk",
      job: "team lead",
      age: 40,
      salary: 7000,
    },
    {
      id: 4,
      name: "Fatma",
      surname: "Ayaz",
      job: "developer",
      age: 26,
      salary: 4500,
    },
  
    {
      id: 5,
      name: "Can",
      surname: "Deniz",
      job: "tester",
      age: 24,
      salary: 3500,
    },
  ];

//* EXAMPLE 1 : display the jobs in the people array  

// personels.forEach((object)=> console.log(object.job));

//?  Output:
//?   developer
//?   tester
//?   team lead
//?   developer
//?   tester

//* EXAMPLE 2 : return the ages + 1 for each person in a new array 

// const agesPlus1 = personels.map((personal)=>personal.age + 1);

// console.log(agesPlus1); //? Output: [ 31, 36, 41, 27, 25 ]

//* EXAMPLE3: Create new Object which consists of uppercased 
//*           name + surname and incremented the age by 5.

// const newObject = personels.map((p)=> { return {
//     fullName : p.name.toUpperCase() +" " + p.surname.toUpperCase(),
//     age : p.age + 5,
// }
// });

// console.log(newObject); 

//? Output:
//? [
//?     { fullName: 'ALI YILMAZ', age: 35 },
//?     { fullName: 'AYŞE YILMAZ', age: 40 },
//?     { fullName: 'MEHMET ÖZTÜRK', age: 45 },
//?     { fullName: 'FATMA AYAZ', age: 31 },
//?     { fullName: 'CAN DENIZ', age: 29 }
//?  ]


//* EXAMPLE4: List the person's names whose age is under 33.

// const personUnder33 = personels.filter((person)=>person.age < 33);
// console.log(personUnder33);

//* EXAMPLE5: Store the names and ages of the developers as a new Object.

// const developersInfo = personels.map((p)=>{return{name: p.name, age: p.age, job:p.job}})
//                                 .filter((p)=> p.job == "developer")
//                                 .map((p)=>{return{name: p.name, age: p.age}})

// console.log(developersInfo); //? Output : [ { name: 'Ali', age: 30 }, { name: 'Fatma', age: 26 } ]

//* EXAMPLE6: calculate avg age of people.

// const averageAge = personels.map((p)=> p.age).reduce((acc,age)=> acc + age,0) / personels.length;

// console.log(averageAge); //? Output : 30

//*EXAMPLE7: Increase the salaries of developers by 20% and
//* calculate sum of increased salary of devs.

// const sumOfIncreasedSalaries = personels.map((p)=>{return {job:p.job, salary:p.salary * 1.2}})
//                                         .filter((p)=>p.job == "developer")
//                                         .reduce((acc,p)=>acc + p.salary,0);

// console.log(sumOfIncreasedSalaries); //? Output : 11400
                                        

//*EXAMPLE8: Increase the salaries of developers by 20% and
//* update the personels object.

// personels.forEach((p)=>{p.salary = p.job == "developer" ? p.salary*1.2 : p.salary;});
// console.log(personels);

//*EXAMPLE9: Delete personel whose id is equals to 4;

// function deletedById(n){
//     personels.forEach((p,index)=>{
//         if (p.id == n) {personels.splice(index,1)}
//     });
//     return personels;
// }

// console.log(deletedById(4));