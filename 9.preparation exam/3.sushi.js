function sushi(args) {
   let typeSushi = (args[0]);
   let resturant = (args[1]);
   let quantity = Number(args[2]);
   let delivery = (args[3]);
   let price = 0;
   let chek = false;

   if(resturant === "Sushi Zone") {
      if(typeSushi === "sashimi") {
         price = quantity*4.99;
      } else if(typeSushi === "maki") {
         price = quantity*5.29;
      } else if(typeSushi === "uramaki") {
         price = quantity*5.99;
      } else if(typeSushi === "temaki") {
         price = quantity*4.29;
      }
   } else if(resturant === "Sushi Time") {
      if(typeSushi === "sashimi") {
         price = quantity*5.49;
      } else if(typeSushi === "maki") {
         price = quantity*4.69;
      } else if(typeSushi === "uramaki") {
         price = quantity*4.49;
      } else if(typeSushi === "temaki") {
         price = quantity*5.19;
      }
} else if(resturant === "Sushi Bar") {
   if(typeSushi === "sashimi") {
      price = quantity*5.25;
   } else if(typeSushi === "maki") {
      price = quantity*5.55;
   } else if(typeSushi === "uramaki") {
      price = quantity*6.25;
   } else if(typeSushi === "temaki") {
      price = quantity*4.75;
   }
} else if(resturant === "Asian Pub") {
   if(typeSushi === "sashimi") {
      price = quantity*4.50;
   } else if(typeSushi === "maki") {
      price = quantity*4.80;
   } else if(typeSushi === "uramaki") {
      price = quantity*5.50;
   } else if(typeSushi === "temaki") {
      price = quantity*5.50;
   }
} else {
   chek = true;
   console.log(`${resturant} is invalid restaurant!`);
}

if(delivery === "Y") {
   price = Math.ceil((price*0.2)+ price);
} else{
   price = Math.ceil(price);
}

if(chek === false) {
   console.log(`Total price: ${price} lv`);
}
}
sushi(["sashimi",
   "Sushi Time",
   3,
   "N"
   ])