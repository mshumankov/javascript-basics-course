function samePairs(args) {
   let n = Number(args[0]);
   let firstNumber = Number(args[1]);
   let secondNumber = Number(args[2]);
   let sum = firstNumber + secondNumber;
   let maxDifference = 0;

   for(let i = 3; i <= (n*2); i+= 2) {
      let currentFirstNumber = Number(args[i]);
      let currentSecondNumber = Number(args[i + 1]);
      let currentSum = currentFirstNumber + currentSecondNumber;
      if(currentSum === sum) {
         continue;
      } else {
         let difference = Math.abs(currentSum - sum);
         if(maxDifference < difference) {
            maxDifference = difference;
         }
      }
      sum = currentSum;
   }

   if(maxDifference === 0) {
      console.log(`Yes, value=${sum}`)
   } else {
      console.log(`No, maxdiff=${maxDifference}`)
   }
}
samePairs([2,
   -1,
   2,
   0,
   -1
   ])