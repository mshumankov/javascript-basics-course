function harvestWine(input) {
   let squareMeterVineyard = parseInt(input[0]);
   let squareMeterGrape = Number(input[1]);
   let neededLitersWine = parseInt(input[2]);
   let numberWorkers = parseInt(input[3]);
   let sumGrape = (squareMeterVineyard*squareMeterGrape);
   let wineLiters = (0.40*sumGrape)/2.5;
   let moreNeededLiters = Math.floor(neededLitersWine-wineLiters);
   let wineleft = Math.ceil(wineLiters-neededLitersWine);
   let wineForWorker = Math.ceil(wineleft / numberWorkers);

   if(wineLiters < neededLitersWine) {
      console.log(`It will be a tough winter! More ${moreNeededLiters} liters wine needed.”`)
   } else {
      console.log(`Good harvest this year! Total wine: ${Math.floor(wineLiters)} liters.”`)
      console.log(`${wineleft} liters left -> ${wineForWorker} liters per person.`)
   }
   
}
harvestWine([1020, 1.5, 425, 4])