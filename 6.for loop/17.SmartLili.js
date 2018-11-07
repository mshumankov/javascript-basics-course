function smartLili(args) {
   let years = Number(args[0]);
   let money = 0;
   let sumMoney = 0;
   let p = (args[2]);
   let laundry = (args[1]);
   for (let i = 1; i <= years; i++) {
      if (i % 2 === 0) {
         money = money + 10;
         sumMoney = (sumMoney + money) - 1;
      } else {
         sumMoney = sumMoney + p;
      }
   }
   let difference = (Math.abs(sumMoney - laundry)).toFixed(2);
   if (sumMoney >= laundry) {
      console.log(`Yes! ${difference}`)
   } else {
      console.log(`No! ${difference}`)
   }

}
smartLili([21, 1570.98, 3])