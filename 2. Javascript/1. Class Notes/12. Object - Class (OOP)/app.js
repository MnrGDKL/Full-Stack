// THIS examples
window.birthYear = 1950;

const teacher = {
    birthYear: 1985,
    // THIS in function refers to parent (teacher collection)
    calcAge(){
                console.log(`birthYear: ${this.birthYear}`);
                console.log(2000 - this.birthYear);
    },
    //THIS in Arrow function refers to window 
    calcAgeArrow: () => {
                console.log(`birthYear: ${this.birthYear}`); 
                console.log(2000-this.birthYear);
    }

};


teacher.calcAge();
teacher.calcAgeArrow();


