function sumNumbers(args) {
let counter = Number(args[0]);
let sum = 0

for(let i = 1; i <= counter; i++) {
   let number = Number(args[i]);
   sum += number;
}
console.log(sum);
}
sumNumbers([0])