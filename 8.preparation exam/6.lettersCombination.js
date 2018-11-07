function lettersCombination(args) {
let firstLetter = (args[0]).charCodeAt();
let lastLetter = (args[1]).charCodeAt();
let unwantedLetter =(args[2]).charCodeAt();
let combination = "";
let counter = 0;

for(let a = firstLetter; a<= lastLetter; a++){
   for(let b = firstLetter; b<= lastLetter; b++){
      for(let c = firstLetter; c<= lastLetter; c++){
         if((a !== unwantedLetter) && (b !== unwantedLetter) && (c !== unwantedLetter)){
         counter++; 
         combination += `${String.fromCharCode(a)}${String.fromCharCode(b)}${String.fromCharCode(c)} `;
         }
      }
   }
}
console.log(combination  + counter);
}
lettersCombination(["a","c", "z"])