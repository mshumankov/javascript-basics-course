function nameWar(args) {
   let counter = 0
   let name = args[counter];
   let finalSum = 0;
   let finalName = ""



while(name !== "STOP") {
   name = args[counter];
   let currentSum = 0;
   let countLet = 0;
   for(let countLetter = 1; countLetter <= name.length; countLetter++) {
      let letter = (name.charCodeAt(countLet));
      currentSum+=letter;
      countLet++;

   }
   if(currentSum > finalSum) {
      finalSum = currentSum;
      finalName = name;
   }
   counter++;

}
console.log(`Winner is ${finalName} - ${finalSum}! `)
}
nameWar(['Ivo',
   'Niki',
   'Valio',
   'Konstantin',
   'STOP'
   ])