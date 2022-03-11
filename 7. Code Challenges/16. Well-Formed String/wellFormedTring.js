

// ! This is an interview question asked by Facebook.
// ! Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).
// ! For example, given the string "([])", you should return true.
// ! Given the string "([)]" or "((()", you should return false.

function wellFormedString(s){
      while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
            let temp = s.replace("()","").replace("[]","").replace("{}","");
            s = temp;
      }
      return s == "";
}

console.log(wellFormedString("([{({})}]({}))")) //? Output: True
console.log(wellFormedString("((()"))           //? Output: False
console.log(wellFormedString("([)]"))           //? Output: False
console.log(wellFormedString("([])"))           //? Output: True
