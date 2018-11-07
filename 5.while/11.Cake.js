function cake(args) {
   let width = Number(args[0]);
   let length = Number(args[1]);
   let i = 2;
   let pieces = (args[i]);
   let numberInput = (args.length) - 1;
   let allCake = width * length;
   let sumPieces = 0;

   while (i <= numberInput) {
      if (pieces === 'STOP') {
         break;
      }
      sumPieces = sumPieces + pieces;
      i++;
      pieces = (args[i]);
   }
   if (allCake >= sumPieces) {
      let leftPieces = allCake - sumPieces;
      console.log(`${leftPieces} pieces are left.`);
   } else {
      let morePieces = sumPieces - allCake;
      console.log(`No more cake left! You need ${morePieces} pieces more.`);
   }
}
cake([10, 2, 2, 4, 6, "STOP"]);