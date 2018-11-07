function moving(args) {
   let length = Number(args[0]);
   let width = Number(args[1]);
   let height = Number(args[2]);
   let i = 3;
   let space = (args[i]);
   let freeSpace = length * width * height;
   let sumOfSpace = 0;

   while (sumOfSpace < freeSpace) {
      if (space === "Done") {
         break;
      }
      sumOfSpace = sumOfSpace + space;
      i++;
      space = (args[i]);
   }

   if (sumOfSpace < freeSpace) {
      let meetersLeft = freeSpace - sumOfSpace;
      console.log(`${meetersLeft} Cubic meters left."`);
   } else {
      let moreSpace = sumOfSpace - freeSpace;
      console.log(`No more free space! You need ${moreSpace} Cubic meters more.`)
   }
}
moving([10, 1, 2, 4, 6, "Done"])