function cinama(input) {
   let pricing = (input[0]);
   let row = Number(input[1]);
   let column = Number(input[2]);
   let sitPlace = (column*row);
   let sumprice = 0

   if(pricing === 'Premiere') {
      sumprice = (sitPlace*12.00).toFixed(2);
   } else if(pricing === 'Normal') {
      sumprice = (sitPlace*7.50).toFixed(2);
   } else if(pricing === 'Discount') {
      sumprice = (sitPlace*5.00).toFixed(2);
   } else {
      sumprice = 'error'
   }
console.log(sumprice + ' leva');
}
cinama(['Discount', 12, 30]);