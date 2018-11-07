function power(args) {
   let powerNumber = (args[0]);


   for(let i = 0; i <= powerNumber; i+=2) {
      
      console.log(Math.pow(2, i))
   }

}
power([7])