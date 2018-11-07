function multiplicationTable(args) {
   let firstNumber = Number(args[0] % 10);
   let secondNumber = Number(Math.floor((args[0] % 100)/10));
   let thirdNumber = Number(Math.floor((args[0] /100)));
   
   for(let a = 1; a <=firstNumber; a++) {
      for(let b = 1; b <=secondNumber; b++) {
         for(let c = 1; c <=thirdNumber; c++) {
            let number = a*b*c;
            console.log(`${a} * ${b} * ${c} = ${number};`)
         }
      }
   }
}
multiplicationTable([222])