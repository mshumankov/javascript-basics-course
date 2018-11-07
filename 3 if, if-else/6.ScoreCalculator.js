function scoreCalculator(input) {
   let score = Number(input);
   let bonus =0;

   if(score<=100) {
      bonus=5;
   } else if(score>100 && score<=1000) {
      bonus=score*0.2;
   } else if(score>1000) {
      bonus=score*0.1;
   } else {
      console.log("not valid number")
   }
   if(score % 2===0) {
      bonus+=1;
   }else if(score % 10===5) {
      bonus+=2
   } else {
      bonus+=0
   }
   console.log(bonus);
   console.log(bonus+score);
}
scoreCalculator(15875);