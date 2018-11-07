function evenOddPosition(args) {
let n = Number(args[0]);
let oddSum = 0;
let evenSum = 0;
let oddMax = Number.MIN_SAFE_INTEGER;
let evenMax = Number.MIN_SAFE_INTEGER;
let oddMin = Number.MAX_SAFE_INTEGER;
let evenMin = Number.MAX_SAFE_INTEGER;

for(let i = 1; i <= n; i++) {
   let number = Number(args[i]);
   if(i % 2 !== 0) {
      oddSum += number;
      if(oddMax < number) {
         oddMax = number
      }
      if(oddMin > number) {
         oddMin = number;
      }
   } else if(i % 2 === 0) {
      evenSum += number;
      if(evenMax < number) {
         evenMax = number
      }
      if(evenMin > number) {
         evenMin = number;
      }
   }
}
if(oddMax === Number.MIN_SAFE_INTEGER) {
   oddMax = "No";
} 
if(oddMin === Number.MAX_SAFE_INTEGER) {
   oddMin = "No";
} 
if(evenMax === Number.MIN_SAFE_INTEGER) {
   evenMax = "No";
} 
if(evenMin === Number.MAX_SAFE_INTEGER) {
   evenMin = "No";
}

console.log("OddSum=" + oddSum);
console.log("OddMin=" + oddMin);
console.log("OddMax=" + oddMax);
console.log("EvenSum=" + evenSum);
console.log("EvenMin=" + evenMin);
console.log("EvenMax=" + evenMax);
}
evenOddPosition([3,
   -1,
   -2,
   -3
   ])