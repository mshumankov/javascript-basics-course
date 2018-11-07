function operationsWithNumbers(input) {
   let firstNumber = Number(input[0]);
   let secondNumber = Number(input[1]);
   let symbol = (input[2]);

   if(symbol === '+') {
      operation = (firstNumber+secondNumber);
      if(operation % 2 === 0) {
         console.log(`${firstNumber} ${symbol} ${secondNumber} = ${operation} – ${"even"}`);
      } else {
         console.log(`${firstNumber} ${symbol} ${secondNumber} = ${operation} – ${"odd"}`);
      }
   } else if(symbol === "-") {
      operation = (firstNumber-secondNumber);
      if(operation % 2 === 0) {
         console.log(`${firstNumber} ${symbol} ${secondNumber} = ${operation} – ${"even"}`);
      } else {
         console.log(`${firstNumber} ${symbol} ${secondNumber} = ${operation} – ${"odd"}`);
      }
   } else if(symbol === "*") {
      operation = (firstNumber*secondNumber);
      if(operation % 2 === 0) {
         console.log(`${firstNumber} ${symbol} ${secondNumber} = ${operation} – ${"even"}`);
      } else {
         console.log(`${firstNumber} ${symbol} ${secondNumber} = ${operation} – ${"odd"}`);
      }
   } else if(symbol === "/") {
      operation = (firstNumber/secondNumber).toFixed(2);
      if(secondNumber === 0) {
         console.log(`Cannot divide ${firstNumber} by zero`)
      } else if(operation % 2 === 0) {
         console.log(`${firstNumber} ${symbol} ${secondNumber} = ${operation}`);
      } else {
         console.log(`${firstNumber} ${symbol} ${secondNumber} = ${operation}`);
      }
   } else if(symbol === "%") {
      operation = (firstNumber % secondNumber);
      if(secondNumber === 0) {
         console.log(`Cannot divide ${firstNumber} by zero`)
      } else if(operation % 2 === 0) {
         console.log(`${firstNumber} ${symbol} ${secondNumber} = ${operation}`);
      } else {
         console.log(`${firstNumber} ${symbol} ${secondNumber} = ${operation}`);
      }
   }
}
operationsWithNumbers([10, 0, '%']);