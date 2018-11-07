function matchTickets(input) {
   let budget = Number(input[0]);
   let ticketType = (input[1]);
   let numberOfPeople = Number(input[2]);

   if(ticketType === "Normal") {
      if(numberOfPeople >= 1 && numberOfPeople <= 4) {
         ticketSum = 249.99*numberOfPeople;
         countBudget = (budget-(budget*0.75))-ticketSum;
         if(countBudget >= 0) {
            console.log(`Yes! You have ${(countBudget).toFixed(2)} leva left.`);
         } else {
            console.log(`Not enough money! You need ${(Math.abs(countBudget)).toFixed(2)} leva.`);
         }
      } else if(numberOfPeople >= 5 && numberOfPeople <= 9) {
         ticketSum = 249.99*numberOfPeople;
         countBudget = (budget-(budget*0.60))-ticketSum;
         if(countBudget >= 0) {
            console.log(`Yes! You have ${(countBudget).toFixed(2)} leva left.`);
         } else {
            console.log(`Not enough money! You need ${(Math.abs(countBudget)).toFixed(2)} leva.`);
         }
      } else if(numberOfPeople >= 10 && numberOfPeople <= 24) {
         ticketSum = 249.99*numberOfPeople;
         countBudget = (budget-(budget*0.50))-ticketSum;
         if(countBudget >= 0) {
            console.log(`Yes! You have ${(countBudget).toFixed(2)} leva left.`);
         } else {
            console.log(`Not enough money! You need ${(Math.abs(countBudget)).toFixed(2)} leva.`);
         }
      } else if(numberOfPeople >= 25 && numberOfPeople <= 49) {
         ticketSum = 249.99*numberOfPeople;
         countBudget = (budget-(budget*0.40))-ticketSum;
         if(countBudget >= 0) {
            console.log(`Yes! You have ${(countBudget).toFixed(2)} leva left.`);
         } else {
            console.log(`Not enough money! You need ${(Math.abs(countBudget)).toFixed(2)} leva.`);
         }
      } else if(numberOfPeople >= 50) {
         ticketSum = 249.99*numberOfPeople;
         countBudget = (budget-(budget*0.25))-ticketSum;
         if(countBudget >= 0) {
            console.log(`Yes! You have ${(countBudget).toFixed(2)} leva left.`);
         } else {
            console.log(`Not enough money! You need ${(Math.abs(countBudget)).toFixed(2)} leva.`);
         }
      }
   } else if(ticketType === 'VIP') {
      if(numberOfPeople >= 1 && numberOfPeople <= 4) {
         ticketSum = 499.99*numberOfPeople;
         countBudget = (budget-(budget*0.75))-ticketSum;
         if(countBudget >= 0) {
            console.log(`Yes! You have ${(countBudget).toFixed(2)} leva left.`);
         } else {
            console.log(`Not enough money! You need ${(Math.abs(countBudget)).toFixed(2)} leva.`);
         }
      } else if(numberOfPeople >= 5 && numberOfPeople <= 9) {
         ticketSum = 499.99*numberOfPeople;
         countBudget = (budget-(budget*0.60))-ticketSum;
         if(countBudget >= 0) {
            console.log(`Yes! You have ${(countBudget).toFixed(2)} leva left.`);
         } else {
            console.log(`Not enough money! You need ${(Math.abs(countBudget)).toFixed(2)} leva.`);
         }
      } else if(numberOfPeople >= 10 && numberOfPeople <= 24) {
         ticketSum = 499.99*numberOfPeople;
         countBudget = (budget-(budget*0.50))-ticketSum;
         if(countBudget >= 0) {
            console.log(`Yes! You have ${(countBudget).toFixed(2)} leva left.`);
         } else {
            console.log(`Not enough money! You need ${(Math.abs(countBudget)).toFixed(2)} leva.`);
         }
      } else if(numberOfPeople >= 25 && numberOfPeople <= 49) {
         ticketSum = 499.99*numberOfPeople;
         countBudget = (budget-(budget*0.40))-ticketSum;
         if(countBudget >= 0) {
            console.log(`Yes! You have ${(countBudget).toFixed(2)} leva left.`);
         } else {
            console.log(`Not enough money! You need ${(Math.abs(countBudget)).toFixed(2)} leva.`);
         }
      } else if(numberOfPeople >= 50) {
         ticketSum = 499.99*numberOfPeople;
         countBudget = (budget-(budget*0.25))-ticketSum;
         if(countBudget >= 0) {
            console.log(`Yes! You have ${(countBudget).toFixed(2)} leva left.`);
         } else {
            console.log(`Not enough money! You need ${(Math.abs(countBudget)).toFixed(2)} leva.`);
         }
      }
   }
}
matchTickets([30000, 'VIP', 49]);