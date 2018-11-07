function transportCost(input) {
   let km = (input[0]);
   let dayOrNight = (input[1]);
   let price = 0;

   if(km < 20) {
      if(dayOrNight === "day") {
         price = (km*0.79)+0.70;
      } else if(dayOrNight === "night") {
         price = (km*0.90)+ 0.70;
      }
   } else if(km >= 20 && km < 100) {
      price = km*0.09;
   } else if(km >= 100) {
      price =km*0.06;
   } else {"invalid number"}

   console.log((price).toFixed(2))
}
transportCost([180, "night"])