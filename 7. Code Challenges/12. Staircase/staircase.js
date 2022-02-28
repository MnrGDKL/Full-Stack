function stairCase(n){
    let allPerms = "";
    for (let i = 0; i < n; i++) {allPerms += "1";}
    let start = Math.round(n/2);
    let cases = [];

    function sumofArray(array){
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += +array[i];
        }
        return sum; 
    }
    for (let i = 1; i <= +allPerms; i++){
        let perms = String(i).split("");
            perms.length >= start && sumofArray(perms) == n
            && !perms.includes("0") && !perms.includes("3")  
            && !perms.includes("4") && !perms.includes("6")  
            && !perms.includes("7") && !perms.includes("8")  
            && !perms.includes("9")   
            ? cases.push(perms) : null;
        }
    console.log(`Number of Stairs: ${n}`);
    console.log(`Number of Unique Ways:  ${cases.length}`);
    let steps = 0;
    for (const i of cases) {
        steps++;
        console.log(`${steps}:\t ${i.join(", ")}`);
    }
}

stairCase(5);



