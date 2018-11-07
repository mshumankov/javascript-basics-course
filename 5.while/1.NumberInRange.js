function numberInRange(input) {
   let i = 0;
   let number = (input[i]);

   while(number < 1 || number > 100) {
      console.log("Invalid Number!");
      i++;
      number = (input[i]);
   }
   console.log(`The number is ${number}`);
}
numberInRange([-22, 401, 93])