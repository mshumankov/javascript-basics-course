function accountBalance(args) {
   let numberPeyment = (args[0]);
   let i = 1;
   let peyment = (args[i]);
   let balance = 0;

   while (i <= numberPeyment) {
      if (peyment > 0) {
         console.log(`Your account balance was increased by: ${peyment}`);
         balance = balance + peyment;
      } else {
         console.log(`Invalid operation!`);
         break;
      }
      i++;
      peyment = (args[i]);

   }
   console.log(`Total balance: ${balance}`);
}
accountBalance([5, 120, 45.55, -150])