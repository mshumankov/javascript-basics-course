function building(args) {
   let floor = (args[0]);
   let room = (args[1]);

   for(let i = floor; i >=1; i--) {
      let typeRoom = "";
      for(let j = 0; j < room; j++) {
         if(i === floor) {
            typeRoom += "L"+i+j+' ';
         }else if (i%2 === 0){
            typeRoom += "O"+i+j+' ';
         } else {
            typeRoom += "A"+i+j+' ';
         }
      }
      console.log(typeRoom);
   }
}
building([9, 5])