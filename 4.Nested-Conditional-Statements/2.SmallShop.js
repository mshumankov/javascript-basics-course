function smallShop(input) {
   let product = (input[0]);
   let town = (input[1]);
   let quantity = (input[2]);

   if(town === 'Sofia') {
      if(product === 'coffee') {
         console.log(quantity*0.50);
      } else if(product === 'water') {
         console.log(quantity*0.80);
      }  else if(product === 'beer') {
         console.log(quantity*1.20);
      } else if(product === 'sweets') {
         console.log(quantity*1.45);
      } else if(product === 'peanuts') {
         console.log(quantity*1.60);
      } else {
         console.log("other product")
      }
   } else if(town === 'Plovdiv') {
      if(product === 'coffee') {
         console.log(quantity*0.40);
      } else if(product === 'water') {
         console.log(quantity*0.70);
      }  else if(product === 'beer') {
         console.log(quantity*1.15);
      } else if(product === 'sweets') {
         console.log(quantity*1.30);
      } else if(product === 'peanuts') {
         console.log(quantity*1.50);
      } else {
         console.log("other product")
      }
   } else if(town === 'Varna') {
      if(product === 'coffee') {
         console.log(quantity*0.45);
      } else if(product === 'water') {
         console.log(quantity*0.70);
      }  else if(product === 'beer') {
         console.log(quantity*1.10);
      } else if(product === 'sweets') {
         console.log(quantity*1.35);
      } else if(product === 'peanuts') {
         console.log(quantity*1.55);
      } else {
         console.log("other product");
      }
   } else {
      console.log("invalid input");
   }
}
smallShop(['sweets', 'Sofia', 2.23]);