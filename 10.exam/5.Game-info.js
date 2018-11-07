function gameInfo(args) {
   let nameTeam = (args[0]);
   let playedMatches = Number(args[1]);
   let sumMinutes = 0;
   let additionalTime = 0;
   let penalties = 0;

   for(let i = 1; i <=playedMatches; i++) {
      let matchMinutes = Number(args[i+1]);
      sumMinutes+=matchMinutes;
      if(matchMinutes > 90 && matchMinutes <=120) {
         additionalTime++;
      }
      if(matchMinutes >120) {
         penalties++
      }
   }
   let averageMinutes = (sumMinutes/playedMatches).toFixed(2);

   console.log(`${nameTeam} has played ${sumMinutes} minutes. Average minutes per game: ${averageMinutes}`);
   console.log(`Games with penalties: ${penalties}`);
   console.log(`Games with additional time: ${additionalTime}`);
}
gameInfo(["Brazil",
   2,
   96,
   115
   ])