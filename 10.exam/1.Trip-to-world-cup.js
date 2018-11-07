function worldCup(args) {
   let ticketGo = Number(args[0]);
   let ticketReturn = Number(args[1]);
   let ticketMatch = Number(args[2]);
   let numberMatches = Number(args[3]);
   let discount = Number(args[4]);

   let ticketFlight = ((ticketGo+ticketReturn)*6);
   let ticketFlightDiscount = ticketFlight-(ticketFlight*(discount/100));
   let ticketMatchResult = (ticketMatch*numberMatches)*6;

   let totalResult = (ticketFlightDiscount+ticketMatchResult).toFixed(2);
   let eachResult = (totalResult / 6).toFixed(2);

   console.log(`Total sum: ${totalResult} lv.`);
   console.log(`Each friend has to pay ${eachResult} lv.`);
}
worldCup([218.55,
   185.90,
   170.50,
   4,
   17
   ])