function evenOddNumber(args) {
   let n = Number(args[0]);
   let sumOdd = 0;
   let sumEven = 0;

   for (let i = 1; i <= n; i++) {
      let number = Number(args[i]);
      if (i % 2 !== 0) {
         sumOdd += number;
      } else {
         sumEven += number;
      }
   }
   let difference = Math.abs(sumEven - sumOdd);
   if (sumOdd === sumEven) {
      console.log("Yes");
      console.log("Sum = " + sumEven);
   } else {
      console.log("No");
      console.log("Diff = " + difference);
   }
}
evenOddNumber([3, 5, 8, 1])