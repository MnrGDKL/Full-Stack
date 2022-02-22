// THIS examples
window.birthYear = 1950;

const teacher = {
    birthYear: 1985,
    calcAge(){
                console.log(`birthYear: ${this.birthYear}`);
                console.log(2000 - this.birthYear);
    },
    calcAgeArrow: () => {
                console.log(`birthYear: ${this.birthYear}`); 
                console.log(2000-this.birthYear);
    }

};


teacher.calcAge();
teacher.calcAgeArrow();

