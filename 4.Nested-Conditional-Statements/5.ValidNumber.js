function validNumber(input) {
   let number = Number(input);
   let isValidNumber = ((number>=100) && (number<=200) || (number===0));
   
   if(!isValidNumber) {
      console.log("Invalid");
   }
} 
validNumber(250);