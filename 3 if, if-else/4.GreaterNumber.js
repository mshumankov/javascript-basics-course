function greaterNumber(input){
   let number1 = Number(input[0]);
   let number2 = Number(input[1]);
   if(number1>number2) {
      console.log(number1);
   } else if(number2>number1) {
      console.log(number2);
   }else {
      console.log("even");
   }

}
greaterNumber([10, 7])