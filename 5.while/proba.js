function rowNumbers(args) {
   let smallest = Number.MAX_SAFE_INTEGER;
   let biggest = Number.MIN_SAFE_INTEGER;
   let i = 0;
   let command = args[i];
   while (command !== "END") {
      /* let command = args[i]; */
      
      let number = Number(command);
      if (number < smallest) {
         smallest = number;
      }
      if (number > biggest) {
         biggest = number;
      }
      i++
   }
   console.log(`Max number: ${biggest}`);
   console.log(`Min number: ${smallest}`);
}

rowNumbers([/* 10, 20, 304, 0, 50,  */"END"])