//* ======================================================
//*                    REDUCE() METHOD
//* ======================================================

//* calculate the average of the salaries

const salaries = [10000, 15000, 32000, 43000, 20000];

const averageSalaries = salaries.reduce((acc,salary)=> acc+salary,0) / salaries.length;
console.log(averageSalaries); //? Output: 24000


//* calculate the sum of the salaries greater than 20000


const upTwenty = salaries.filter((salary)=> salary > 20000).reduce((acc, salary) => acc + salary);
console.log(upTwenty); //? Output: 75000