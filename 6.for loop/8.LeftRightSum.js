function leftRightSum(args) {
let n = Number(args[0]);
let sumLeft = 0;
let sumRight = 0;

for(let i = 1; i <= n; i++) {
   let numberLeft = Number(args[i]);
   sumLeft+= numberLeft;
   let numberRight = Number(args[i + n]);
   sumRight+= numberRight;

}
let differece = Math.abs(sumLeft - sumRight);
if(sumLeft === sumRight) {
   console.log(`Yes, sum = ${sumLeft}`)
} else {
   console.log(`No, diff = ${differece}`);
}
}
leftRightSum([2, 10, 90, 60, 30]);