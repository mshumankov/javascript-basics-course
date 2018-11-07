function biggerNumber(args) {
   let n = Number(args[0]);
   let bigNuber = Number.MIN_SAFE_INTEGER;

   for (let i = 1; i <= n; i++) {
      let number = (args[i]);
      if (number > bigNuber) {
         bigNuber = number;
      }
   }
   console.log(bigNuber);
}
biggerNumber([2, -1, -2])