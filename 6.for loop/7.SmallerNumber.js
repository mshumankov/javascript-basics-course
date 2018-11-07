function biggerNumber(args) {
   let n = Number(args[0]);
   let smallNuber = Number.MAX_SAFE_INTEGER;

   for (let i = 1; i <= n; i++) {
      let number = (args[i]);
      if (number < smallNuber) {
         smallNuber = number;
      }
   }
   console.log(smallNuber);
}
biggerNumber([3, - 10, 20, -30]);