function numberToOne(args) {
let number = Number(args[0]);
for(let i = number; i>= 1; i--) {
   console.log(i);
}
}
numberToOne([5]);