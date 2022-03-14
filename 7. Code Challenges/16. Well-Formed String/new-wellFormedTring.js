

//?  String = "([])"
//?  String = "([)]"
//?  String = "((()"
//?  String = "{([]){[]}}"


function validParanthesis(str){

    while(str.includes("()") || str.includes("[]") || str.includes("{}")){
            str = str.replace("()", "").replace("[]","").replace("{}","");
        }
    return str == "";
}

console.log(validParanthesis("([])"));
console.log(validParanthesis("([)]"));
console.log(validParanthesis("((()"));
console.log(validParanthesis("{([]){[]}}"));
console.log(validParanthesis("([{({})}]({}))"));