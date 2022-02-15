let word        = prompt("Word        :");
let seperator   = prompt("Seperator   :");
let repeat      = +prompt("Repetition :");
let wordArray   = [];

for (let i = 0; i < repeat; i++) {
    wordArray.push(word);
}
console.log(wordArray.join(seperator));

