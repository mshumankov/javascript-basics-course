function dumbPasswords(args) {
let n = (args[0]);
let l = (args[1]);
let currentNumber ="";

for(let a = 1; a <= n; a++) {
   for(let b = 1; b <= n; b++ ){
      for(let c = 97; c <= 122; c++) {
         for(let d = 97; d <= 122; d++) {
            for(let e = 1; e <= n; e++){
               if((c >= 97 && c <= (97+l-1)) && (d >= 97 && d <= (97+l-1)) && (e > a && e > b)) {
                  currentNumber +=`${a}${b}${String.fromCharCode(c)}${String.fromCharCode(d)}${e} `;
                  
               }
            }
         
         }
      }
   }
}
console.log(currentNumber);
}
dumbPasswords([4, 2])