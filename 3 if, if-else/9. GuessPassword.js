function guessPassword(input) {
   let password = (input);

   if(password === "s3cr3t!P@ssw0rd") {
      console.log("Welcome")
   } else {
      console.log("Wrong password!")
   }
}
guessPassword("s3cr3t!P@ssw0rd")