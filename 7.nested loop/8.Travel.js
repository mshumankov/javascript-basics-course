function travel(args) {
let counter = 0;

while(args[counter] !== "END") {
   let country = args[counter];
   counter++;
   let budget = Number(args[counter]);
   counter++
   let saveMoney = 0
   while(saveMoney <= budget) {
      saveMoney+= Number(args[counter]);
      if(saveMoney >= budget) {
         console.log(`Going to ${country}!`)
      }
      counter++
   }
}
}
travel(['France',
   2000,
   300,
   300,
   200,
   400,
   190,
   258,
   360,
   'Portugal',
   1450,
   400,
   400,
   200,
   300,
   300,
   'Egypt',
   1900,
   1000,
   280,
   300,
   500,
   'End'
   ])