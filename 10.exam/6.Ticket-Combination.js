function Combination(args) {
   let number = Number(args[0]);
   let counter = 1;
   let ticketCombination = '';
   let prize = 0;

   for(let a = 66; a <= 76; a=a+2) {
      for(let b = 102; b >= 97; b--) {
         for(let c = 65; c <= 67; c++) {
            for(let d = 1; d <= 10; d++) {
               for(let e = 10; e >= 1; e--) {
                  
                     if(counter === number) {
                        ticketCombination = `${String.fromCharCode(a)}${String.fromCharCode(b)}${String.fromCharCode(c)}${d}${e}`
                        prize = a+b+c+d+e;
                     }
                  counter++;
               }
            }
         }
      }
   }
console.log(`Ticket combination: ${ticketCombination}`);
console.log(`Prize: ${prize} lv.`)

}
Combination([17])