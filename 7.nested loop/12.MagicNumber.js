function magicNumber(args) {
   let number = (args[0]);
   let result = ""
   for(let a = 1; a <= 9; a++) {
      for(let b = 1; b <= 9; b++) {
         for(let c = 1; c <= 9; c++) {
            for(let d = 1; d <= 9; d++) {
               for(let e = 1; e <= 9; e++) {
                  for(let f = 1; f <= 9; f++) {
                     if(a*b*c*d*e*f === number) {
                        result+=`${a}${b}${c}${d}${e}${f} `
                     }
                  }
               }
            }
         }
      }
   }
console.log(result);
}
magicNumber([531441])