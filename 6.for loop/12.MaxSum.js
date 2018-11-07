function maxSumEqual(args) {
   let n = (args[0]);
   let biggestNumber = Number.MIN_SAFE_INTEGER;
   let sum = 0;

   for (let i = 1; i <= n; i++) {
      let number = (args[i]);
      if (biggestNumber < number) {
         biggestNumber = number;
      }
      sum += number;

   }
   let difference = Math.abs(biggestNumber - (sum - biggestNumber));
   if (biggestNumber === (sum - biggestNumber)) {
      console.log("Yes");
      console.log(`Sum = ${biggestNumber}`);
   } else {
      console.log("No");
      console.log(`Diff = ${difference}`)
   }
}
maxSumEqual([3, 1, 1, 1])