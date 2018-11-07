function coins(input) {
   let numberOfCoins = 0;
   let sum = Number(input[0]);

   while(sum > 0) {
      if(sum >= 2.00) {
         sum = sum - 2;
      } else if(sum >= 1.00) {
         sum = (sum - 1).toFixed(2);
      } else if(sum >= 0.50) {
         sum = (sum - 0.50).toFixed(2);
      } else if(sum >= 0.20) {
         sum = (sum - 0.20).toFixed(2);
      } else if(sum >= 0.10) {
         sum = (sum - 0.10).toFixed(2);
      } else if(sum >= 0.05) {
         sum = (sum - 0.05).toFixed(2);
      } else if(sum >= 0.02) {
         sum = (sum - 0.02).toFixed(2);
      } else if(sum >= 0.01) {
         sum = (sum - 0.01).toFixed(2);
      }
      numberOfCoins++;
   }
   console.log(numberOfCoins);
   
}
coins([2.73])