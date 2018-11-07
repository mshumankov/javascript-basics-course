function footballKit(args) {
   let tshirt = Number(args[0]);
   let amountForGift = Number(args[1]);
   let shorts = tshirt*0.75;
   let sock = shorts*0.20;
   let sneackers = (tshirt+shorts)*2;
   let discount = 0.85;

   let result =(((tshirt+shorts+sock+sneackers)*discount)).toFixed(2);
   let difference = (amountForGift - result).toFixed(2);

   if(result >= amountForGift) {
      console.log(`Yes, he will earn the world-cup replica ball!`);
      console.log(`His sum is ${result} lv.`);
   } else {
      console.log(`No, he will not earn the world-cup replica ball.`);
      console.log(`He needs ${difference} lv. more.`);
   }


}
footballKit([59.99,
   500
   ])