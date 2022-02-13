let vowels          = "aeıioöuü".split("");
let constants       = "bcçdfgğhjklmnprsştvyzqwx".split("");
let countVowels     = 0;
let countConstants  = 0;

let str = prompt("String: ").toLowerCase().split("");
for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {countVowels++;}
    if (constants.indexOf(str[i]) !== -1) {countConstants++;}
}
console.log(`Vowels   : ${countVowels}\nConstants: ${countConstants}`);
