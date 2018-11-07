function equalNumbers(input) {
   let number1 = Number(input[0]);
   let number2 = Number(input[1]);
   let number3 = Number(input[2]);

   if(number1 === number2) {
      if(number2 === number3) {
         console.log("yes");
      } else {
         console.log("no")
      }
   } else {
      console.log("no")
   }
}
equalNumbers([1, 1, 2])