function rowNumbers(input) {
   let number = (input[0]);
   let count = 0;

   while(number > count) {
      count = (count*2)+1;
      if(number >= count) {
         console.log(count);
      }
   }
}
rowNumbers([17])