class Person{
    constructor(name, age){
        this.name   = name;
        this.age    = age;
    }
    showInfo(){
        console.log(`İsim: ${this.name}, Yaş: ${this.age}`);
    }
}

class Employee extends Person{
    constructor(name, age, salary){
        super(name, age);
        this.salary = salary;
    }
    showInfo(){
        console.log(`İsim: ${this.name}, Yaş: ${this.age} Maaş: ${this.salary}`);
    }
}

const person1 = new Person("Ahmet", 20);
const employee1 = new Employee("Ali", 25, 10000);


employee1.showInfo();
person1.showInfo();