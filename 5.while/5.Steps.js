function footsteps(args) {
   let goalSteps = 10000;
   let i = 0;
   let steps = Number(args[i]);
   let sumSteps = 0;
   let numberArgs = (args.length) - 1;
   let moreSteps = 0


   while (i <= numberArgs) {
      if (steps === "Going home") {

      }
      else if (sumSteps < goalSteps) {
         sumSteps = sumSteps + steps;
         moreSteps = goalSteps - sumSteps;
      }
      i++;
      steps = (args[i]);
   }
   if (sumSteps < goalSteps) {
      console.log(`${moreSteps} more steps to reach goal.`)
   } else if (sumSteps >= goalSteps) {
      console.log(`Goal reached! Good job!`);
   }
}
footsteps([125, 250, 4000, 30, 2678, 4682]);