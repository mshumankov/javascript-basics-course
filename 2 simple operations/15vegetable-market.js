function vegetableMarket(input){
   let vegetablePrice =(input[0]);
   let fruitPrice=(input[1]);
   let kilogramVegetables= (input[2]);
   let kilogramFruits= (input[3]);
   let income =((vegetablePrice*kilogramVegetables)+(fruitPrice*kilogramFruits));
   let incomeEuro = ((income/1.94).toFixed(2));
   console.log(incomeEuro);
}
vegetableMarket([1.5, 2.5, 10, 10])