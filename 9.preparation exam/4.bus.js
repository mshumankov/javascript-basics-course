function bus(args) {
   let passengerNumber = Number(args[0]);
   let stops = Number(args[1]);
   let counter = 1;
   let sumPassengers = passengerNumber;
   let i = 2;
   while(counter <= stops) {
      let upPassenger = (args[i+1]);
      let downPassenger = (args[i]);
      if(counter % 2 === 0) {
         sumPassengers= sumPassengers-downPassenger+upPassenger-2;
      } else {
         sumPassengers= sumPassengers-downPassenger+upPassenger+2;
      }

      i=i+2;
      counter++;
   }
   console.log(`The final number of passengers is : ${sumPassengers}`)
}
bus([17,
   3,
   6,
   7,
   8,
   9,
   3,
   4
   ])