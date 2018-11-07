function traveling(input) {
   let budget = (input[0]);
   let season = (input[1]);
   let destination = '';
   let typeVacation = '';
   let amountSpent = 0;

   if(budget <= 100) {
      destination = 'Bulgaria';
      if(season === 'summer') {
         typeVacation = 'Camp';
         amountSpent = budget*0.3;
      } else {
         typeVacation = 'Hotel';
         amountSpent = budget*0.7;
      }
      
   } else if(budget > 100 && budget <= 1000) {
      destination = 'Balkans';
      if(season === 'summer') {
         typeVacation = 'Camp';
         amountSpent = budget*0.4;
      } else {
         typeVacation = 'Hotel';
         amountSpent = budget*0.8;
      }
   } else if(budget > 1000) {
      destination = 'Europe';
      typeVacation = 'Hotel';
      amountSpent = budget*0.9;
   }
   console.log(`Somewhere in ${destination}`);
   console.log(`${typeVacation} – ${(amountSpent).toFixed(2)}`)
}
traveling([1500, 'summer'])