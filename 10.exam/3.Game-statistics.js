function gameStatistic(args) {
   let minutes = Number(args[0]);
   let name = (args[1]);

   if(minutes === 0) {
      console.log(`Match has just began!`);
   } else if(minutes < 45) {
      console.log(`First half time.`);
   } else if(minutes >= 45) {
      console.log(`Second half time.`);
   }

   if(minutes >= 1 && minutes <= 10) {
      console.log(`${name} missed a penalty.`);
      if(minutes % 2 === 0) {
         console.log(`${name} was injured after the penalty.`);
      }
   } else if (minutes >10 && minutes <= 35) {
      console.log(`${name} received yellow card.`);
      if(minutes % 2 !== 0) {
         console.log(`${name} got another yellow card.`);
      }
   } else if(minutes > 35 && minutes < 45) {
      console.log(`${name} SCORED A GOAL !!!`);
   } else if(minutes > 45 && minutes <=55) {
      console.log(`${name} got a freekick.`);
      if(minutes % 2 === 0) {
         console.log(`${name} missed the freekick.`);
      }
   } else if(minutes>55 && minutes <=80) {
      console.log(`${name} missed a shot from corner.`);
      if(minutes%2 !== 0) {
         console.log(`${name} has been changed with another player.`);
      }
   } else if(minutes>80 && minutes <=90) {
      console.log(`${name} SCORED A GOAL FROM PENALTY !!!`);
   }
}
gameStatistic([25,
   "Ronaldo"
   ])