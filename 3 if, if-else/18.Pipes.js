function pipes(input) {
   let poolLiters = Number(input[0]);
   let firstPipe = Number(input[1]);
   let secondPipe = Number(input[2]);
   let hours = Number(input[3]);
   let litersByPipes = ((firstPipe*hours)+(secondPipe*hours));

   let percentPool = (Math.floor((litersByPipes / poolLiters)*100));
   let percentFirstPipe = (Math.floor(((firstPipe*hours) / litersByPipes)*100));
   let percentSecondPipe = (Math.floor(((secondPipe*hours)/ litersByPipes)*100));
   let overflows = ((litersByPipes-poolLiters).toFixed(1));
   
   if(litersByPipes<=poolLiters) {
      console.log(`The pool is ${percentPool}% full. Pipe 1: ${percentFirstPipe}%. Pipe 2: ${percentSecondPipe}%.`)
   } else if(litersByPipes>poolLiters) {
      console.log(`For ${hours} hours the pool overflows with ${overflows} liters.`)
   }
}
pipes([100, 100, 100, 2.5])