function repairTiles(input){
   let placeWidth =(input[0]);
   let tileWidth =(input[1]);
   let tileHeight =(input[2]);
   let benchWidth =(input[3]);
   let benchHeight =(input[4]);
   let benchArea = (benchWidth*benchHeight);
   let placeArea =((placeWidth*placeWidth)-benchArea);
   let tileArea =(tileWidth*tileHeight);
   let placetile = (placeArea/tileArea);
   let resultPlace = (placetile);
   let timeForTile = (resultPlace*0.2)

   console.log(placetile);
   console.log(timeForTile);
}
repairTiles([20, 5, 4, 1, 2])