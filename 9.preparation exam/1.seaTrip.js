function seaTrip(args) {
   let food = Number(args[0]);
   let souvenir = Number(args[1]);
   let hotel = Number(args[2]);

   let road = (420/100)*7;
   let travelCosts = road*1.85;
   let foodCosts = food*3;
   let souvenirCosts = souvenir*3;
   let hotelCosts = (hotel*0.90)+(hotel*0.85)+(hotel*0.80);
   let costs =(travelCosts+foodCosts+souvenirCosts+hotelCosts).toFixed(2);
   console.log(`Money needed: ${costs}`);
}
seaTrip([50,
   50,
   120
   ])