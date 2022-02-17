let btn = document.getElementById("btn")

const list = ['C1234 - John Doe, London, Full-Stack',
'C2345 - Jane Doe, London, Data-Science',
'C2346 - Mary Ann, Paris, AWS-Devops',
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack',
'C2555 - William Cash, Manchester, Data-Science',
'C2455 - Patrick Jane, Madrid, Full-Stack']

const new_list = [];
const list_title = ["St Nr", "First Name", "Last Name", "Location", "Path"];

for (let i = 0; i < list.length; i++) {
    let list_number = [list[i].split(" - ")[0]];
    let list_info = list[i].split(" - ")[1].split(", ");
    let list_name = list_info[0].split(" ");
        list_info = list_info.slice(1); 
    for (const i of list_name) {
        list_number.push(i)
    }
    for (const i of list_info) {
        list_number.push(i)
    }
    new_list.push(list_number);
}

let row     = new_list.length;
let column  = new_list[0].length;

btn.addEventListener("click",()=>{
    let table = document.createElement("table");
    
    for (let i = 0; i <= row; i++) {
        
        let newTr = document.createElement("tr");

        if (i == 0){
            for (let j = 0; j < column; j++) {
                
                let newTh = document.createElement("th");
                let text = document.createTextNode(list_title[j]);
                newTh.appendChild(text);
                newTr.appendChild(newTh);
            }
        } 
        else{
            for (let j = 0; j < column; j++) {
                
                let newTd = document.createElement("td");
                let innertext = new_list[i-1][j];
                let text = document.createTextNode(innertext);
                newTd.appendChild(text);
                newTr.appendChild(newTd);
            }
        }
       table.appendChild(newTr); 
    }
    document.body.appendChild(table);
    console.log(table);
})