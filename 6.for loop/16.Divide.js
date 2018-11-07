function divide(args) {
   let n = Number(args[0]);
   let p1 = 0;
   let p2 = 0;
   let p3 = 0;

   for(let i = 1; i <= n; i++) {
      let number = Number(args[i]);
      if(number % 2 === 0) {
         p1++;
      }
       if(number % 3 === 0) {
         p2++;
      }
      if(number % 4 === 0) {
         p3++;
      }
   }
   p1 = ((p1 / n)*100).toFixed(2);
   p2 = ((p2 / n)*100).toFixed(2);
   p3 = ((p3 / n)*100).toFixed(2);

   console.log(p1 + "%");
   console.log(p2 + "%");
   console.log(p3 + "%");
}
divide([3,
   3,
   6,
   9
   ])