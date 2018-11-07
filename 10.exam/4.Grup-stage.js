function grupStage(args) {
   let nameTeam = (args[0]);
   let playedMatches = Number(args[1]);
   let sumGoalsScored = 0;
   let sumGoalsReceived = 0;
   let points = 0

   for(let i = 2; i<=(playedMatches*2);i=i+2) {
      let goalsScored = Number(args[i]);
      sumGoalsScored+=goalsScored;
      let goalReceived = Number(args[i + 1]);
      sumGoalsReceived+= goalReceived;

      if(goalsScored>goalReceived) {
         points+=3;
      } else if(goalsScored === goalReceived) {
         points++;
      }

   }
   let differenceGoals = sumGoalsScored-sumGoalsReceived;
   if(sumGoalsScored >= sumGoalsReceived) {
      console.log(`${nameTeam} has finished the group phase with ${points} points.`);
      console.log(`Goal difference: ${differenceGoals}.`)
   } else {
      console.log(`${nameTeam} has been eliminated from the group phase.`);
      console.log(`Goal difference: ${differenceGoals}.`)
   }
}
grupStage(["Croatia",
   4,
   3,
   2,
   1,
   1,
   2,
   0,
   2,
   1
   ])