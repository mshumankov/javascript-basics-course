function catShelter(args) {
let boughtFood = Number(args[0])*1000;
let i = 1;
let eatenFood = (args[i]);
let sumEatenFood = 0;

while(eatenFood !== "Adopted") {
   sumEatenFood += eatenFood;
   i++;
   eatenFood = (args[i]);
}
let leftFood = boughtFood-sumEatenFood ;
let notEnoughFood = sumEatenFood - boughtFood;

if(sumEatenFood <= boughtFood) {
   console.log(`Food is enough! Leftovers: ${leftFood} grams.`);
} else {
   console.log(`Food is not enough. You need ${notEnoughFood} grams more.`);
}

}
catShelter([3,
   1000,
   1000,
   1000,
   "Adopted"
   ])