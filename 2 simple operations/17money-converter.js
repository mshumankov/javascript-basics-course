function moneyConverter(input){
   let bitcoin = (input[0]);
   let yuan = (input[1]);
   let commission = (input[2]);
   let bitcoinRate = (bitcoin*1168);
   let yuanToDolar = (yuan*0.15);
   let yuanRate = (yuanToDolar*1.76);
   let moneyLeva = (yuanRate+bitcoinRate)/1.95;
   let commissionRate = (moneyLeva*(commission/100));
   let moneyLevaWithCommission = (moneyLeva-commissionRate);
   console.log((moneyLevaWithCommission).toFixed(2));
}
moneyConverter([20, 5678, 2.4])