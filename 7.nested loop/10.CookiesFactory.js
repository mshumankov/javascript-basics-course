function cookiesFactory(args) {
let n = Number(args[0]);
let sugar = false;
let eggs = false;
let flour = false;
let counterBake = 1
let i = 1;
let currentProduct =(args[i]); 
while(counterBake <= n) {
   let counterProduct = 0;
   while(counterProduct < 1){
if(currentProduct === "flour") {
   flour = true;
} else if(currentProduct === "eggs") {
   eggs = true;
} else if(currentProduct === "sugar") {
   sugar = true;
}
if(currentProduct === "Bake!") {
   if(flour && eggs && sugar) {
      console.log(`Baking batch number ${counterBake}...`);
      sugar = false;
eggs = false;
flour = false;
      counterProduct++;
   } else {
      console.log(`The batter should contain flour, eggs and sugar!`);
   }
}
i++;
currentProduct =(args[i]);
   }
   counterBake++;
}
}
cookiesFactory([3,
   "flour",
   "eggs",
   "jam",
   "Bake!",
   "sugar",
   "Bake!",
   "flour",
   "eggs",
   "milk",
   "almonds",
   "sugar",
   "Bake!",
   "flour",
   "eggs",
   "sugar",
   "Bake!",
   ])