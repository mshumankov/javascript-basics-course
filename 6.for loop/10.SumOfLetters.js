function sumOfLetters([args]) {

let numberLetter = (args.length)-1;
let sum = 0;

for(let i = 0; i <= numberLetter; i++) {
   let letter = (args[i]);
   if(letter === "a") {
      sum+= 1;
   } else if(letter === "e") {
      sum+= 2;
   } else if(letter === "i") {
      sum+= 3;
   } else if(letter === "o") {
      sum+= 4;
   } else if(letter === "u") {
      sum+= 5;
   } else {
      continue;
   }
}
console.log(sum);
}
sumOfLetters(["beer"])