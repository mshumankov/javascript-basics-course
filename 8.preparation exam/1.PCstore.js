function pcStore(args) {
   let processor = Number(args[0]);
   let graphicCard = Number(args[1]);
   let ram = Number(args[2]);
   let ramQuantity = Number(args[3]);
   let discount = Number(args[4]);

   let ramFinal = ram*ramQuantity;
   let discountItems = (graphicCard+processor)-((graphicCard+processor)*discount);
   let result = ((ramFinal+discountItems)*1.57).toFixed(2);
   console.log(`Money needed - ${result} leva.`);

}
pcStore([200,
   100,
   80,
   1,
   0.01
   ])