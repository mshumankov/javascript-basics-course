function readPersonalInfo([arg1, arg2, arg3, arg4]){
   let firstName = (arg1);
   let secondName = (arg2);
   let age = (arg3);
   let town = (arg4);
   console.log("You are "+firstName+" "+secondName+", a "+age+"-years old person from "+town);
}
readPersonalInfo(["Ivan", "Ivanov", 20, "Sofia"]);