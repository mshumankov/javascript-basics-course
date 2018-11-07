function tradeCommission(input) {
   let town = (input[0]);
   let sales = (input[1]);
   let commission = 0

   if(town === 'Sofia') {
      if(sales >= 0 && sales <= 500) {
         commission = (sales*0.05).toFixed(2);
      } else if(sales > 500 && sales <= 1000) {
         commission = (sales*0.07).toFixed(2);
      }  else if(sales > 1000 && sales <= 10000) {
         commission = (sales*0.08).toFixed(2);
      }  else if(sales > 10000) {
         commission = (sales*0.12).toFixed(2);
      } else {
         commission = 'error';
      }
   } else if(town === 'Varna') {
      if(sales >= 0 && sales <= 500) {
         commission = (sales*0.045).toFixed(2);
      } else if(sales > 500 && sales <= 1000) {
         commission = (sales*0.075).toFixed(2);
      }  else if(sales > 1000 && sales <= 10000) {
         commission = (sales*0.10).toFixed(2);
      }  else if(sales > 10000) {
         commission = (sales*0.13).toFixed(2);
      } else {
         commission = 'error';
      }

   } else if(town === 'Plovdiv') {
      if(sales >= 0 && sales <= 500) {
         commission = (sales*0.055).toFixed(2);
      } else if(sales > 500 && sales <= 1000) {
         commission = (sales*0.08).toFixed(2);
      }  else if(sales > 1000 && sales <= 10000) {
         commission = (sales*0.12).toFixed(2);
      }  else if(sales > 10000) {
         commission = (sales*0.145).toFixed(2);
      } else {
         commission = 'error';
      }
   } else {
      commission = 'error';
   }
   console.log(commission);
   
}
tradeCommission(['Varna', 3874.5]);