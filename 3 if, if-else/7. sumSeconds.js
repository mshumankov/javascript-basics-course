function sumseconds(input) {
   let racer = Number(input[0]+(input[1]+input[2]));
   let mins =0;
   let secs =0;
   
   if(racer>=0 && racer<=59) {
      mins="0:";  (secs=(0 + racer));
   } else if(racer>=60 && racer<=119) {
      mins="1:";  (secs=(racer-60));
   } else if(racer>=120 && racer<=179) {
      mins="2:";  (secs=(racer-120));
   }
   if(secs<10) {
      console.log(mins + "0" + secs);
   }else {
      console.log(mins + secs);
   }
   
}
sumseconds([35, 45, 44])