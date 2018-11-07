function voleibolPlay(input) {
   let year = (input[0]);
   let holydays = Number(input[1]);
   let weekendHomeTown = Number(input[2]);
   let weekendSofia = (48-weekendHomeTown);
   let playVoleibolSofia = (weekendSofia*0.75);
   let playVoleibolHomeTown = weekendHomeTown;
   let playHolydays = (holydays*0.6666);
   let sumPlayVoleibol = (playVoleibolSofia + playVoleibolHomeTown + playHolydays);
   let playVoleibolYear = 0
    
   if(year === 'leap') {
      playVoleibolYear = Math.floor((sumPlayVoleibol*0.15)+sumPlayVoleibol);
   } else {
      playVoleibolYear = Math.floor(sumPlayVoleibol);
   }

   console.log(playVoleibolYear);
}
voleibolPlay(['normal', 6, 13]);