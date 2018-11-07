function shopping(args) {
   let budget = Number(args[0]);
   let numerOfChocolates = Number(args[1]);
   let literMilk = Number(args[2]);
   let fruit = Math.floor(numerOfChocolates-(numerOfChocolates*0.35));

   let shoppingSum = Number((numerOfChocolates*0.65)+(literMilk*2.70)+(fruit*0.20));
 

   let result = (Math.abs(budget - shoppingSum)).toFixed(2);
   if(budget >= shoppingSum) {
      console.log(`You got this, ${result} money left!`)
   } else {
      console.log(`Not enough money, you need ${result} more!`)
   }


}
shopping([3,
   4,
   2.7
   ])