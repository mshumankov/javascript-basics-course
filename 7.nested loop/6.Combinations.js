function combinations(args) {
   let number = Number(args[0]);
   let sum = 0

   for(let a = 0; a<=99; a++) {
      for(let b = 0; b<=99; b++) {
         for(let c = 0; c<=99; c++) {
            for(let d = 0; d<=99; d++) {
               for(let e = 0; e<=99; e++) {
                  if(a+b+c+d+e === number) {
                     sum+=1;
                  }
               }
            }
         }
      }
   }
   console.log(sum);
}
combinations([20])