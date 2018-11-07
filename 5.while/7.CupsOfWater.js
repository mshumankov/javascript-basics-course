function cupsOfWater(args) {
   let cupMililiters = Number(args[0]);
   let i = 1;
   let buttonMililiters = (args[i]);
   let number = (args.length)-1;
   let pressedButton = 0;
   let sumMililiters = 0;

   while(i <= number) {
      if(sumMililiters >= cupMililiters) {
         break;
      } else if(buttonMililiters === 'Hard') {
         sumMililiters = sumMililiters + 200;
      } else if(buttonMililiters === 'Medium') {
         sumMililiters = sumMililiters + 100;
      } else if(buttonMililiters === 'Easy') {
         sumMililiters = sumMililiters + 50;
      }
      i++;
      pressedButton++;
      buttonMililiters = (args[i]);
   }
   let spilled = sumMililiters - cupMililiters;
   if(sumMililiters > cupMililiters) {
      console.log(`${spilled}ml has been spilled.`);
   } else if(sumMililiters === cupMililiters) {
      console.log(`The dispenser has been tapped ${pressedButton} times.`)
   } else {
      console.log(`Cup is not full`);
   }
}
cupsOfWater([650, 'Hard', 'Medium', 'Medium', 'Easy', 'Medium', 'Medium'])