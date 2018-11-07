function timePlus15(input) {
   let hour = Number(input[0]);
   let mins = Number(input[1]);
   let sumMins = (mins + 15);

   if(sumMins > 60) {
      hour += 1; (sumMins = (sumMins - 60)) 
   } else {
      sumMins = sumMins + 0;
   }
   
   if(sumMins < 10) {
      sumMins = "0" + sumMins;
   } else {
      sumMins = sumMins + 0;
   }
   
   if(hour > 23) {
      hour = hour - 24;
   } else {
      hour = hour + 0;
   }
   
   console.log(hour + ":" + sumMins);
}
timePlus15([12, 49])