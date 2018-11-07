function fruitShop(input) {
   let fruit = (input[0]);
   let dayOfWeek = (input[1]);
   let quantity = Number(input[2]);
   let sum = 0;

   if(dayOfWeek === 'Monday' ||
dayOfWeek === 'Tuesday' ||
dayOfWeek === 'Wednesday' ||
dayOfWeek === 'Thursday' ||
dayOfWeek === 'Friday') {
   if(fruit === 'banana') {
      sum=quantity*2.50;
      console.log((sum).toFixed(2));
   } else if(fruit === 'apple') {
      sum=quantity*1.20;
      console.log((sum).toFixed(2));
   } else if(fruit === 'orange') {
      sum=quantity*0.85;
      console.log((sum).toFixed(2));
   } else if(fruit === 'grapefruit') {
      sum=quantity*1.45;
      console.log((sum).toFixed(2));
   } else if(fruit === 'kiwi') {
      sum=quantity*2.70;
      console.log((sum).toFixed(2));
   } else if(fruit === 'pineapple') {
      sum=quantity*5.50;
      console.log((sum).toFixed(2));
   } else if(fruit === 'grapes') {
      sum=quantity*3.85;
      console.log((sum).toFixed(2));
   } else {
      sum=('error');
      console.log(sum);
   }
} else if(dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
   if(fruit === 'banana') {
      sum=quantity*2.70;
      console.log((sum).toFixed(2));
   } else if(fruit === 'apple') {
      sum=quantity*1.25;
      console.log((sum).toFixed(2));
   } else if(fruit === 'orange') {
      sum=quantity*0.90;
      console.log((sum).toFixed(2));
   } else if(fruit === 'grapefruit') {
      sum=quantity*1.60;
      console.log((sum).toFixed(2));
   } else if(fruit === 'kiwi') {
      sum=quantity*3.00;
      console.log((sum).toFixed(2));
   } else if(fruit === 'pineapple') {
      sum=quantity*5.60;
      console.log((sum).toFixed(2));
   } else if(fruit === 'grapes') {
      sum=quantity*4.20;
      console.log((sum).toFixed(2));
   } else {
      sum=('error');
      console.log(sum);
   }
} else {
   sum=('error');
   console.log(sum);
}

}
fruitShop(['tomato', 'Saturday', 0.5]);