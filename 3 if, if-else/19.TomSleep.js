function tomSleep(input) {
   let holidays = Number(input);
   let workDays = (365-holidays);
   let normTomPlay = 30000;
   let tomPlayForYear = ((workDays*63)+(holidays*127));
   let differenceFromNorm =(Math.abs(normTomPlay-tomPlayForYear));
   let hours = (Math.trunc(differenceFromNorm / 60));
   let minits = differenceFromNorm % 60;

   if(tomPlayForYear < normTomPlay) {
      console.log("Tom sleeps well");
      console.log(`${hours} hours and ${minits} minutes more for play`);
   } else {
      console.log("Tom will run away");
      console.log(`${hours} hours and ${minits} minutes less for play`)
   }
   
}
tomSleep(113);