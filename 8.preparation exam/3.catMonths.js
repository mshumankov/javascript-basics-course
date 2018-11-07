function catMonth(args) {
let catType = (args[0]);
let gender = (args[1]);
let catMonths = 0
let chek = false

if(gender === "m") {
   if(catType === "British Shorthair") {
catMonths = (13*12) / 6;
   } else if(catType === "Siamese") {
      catMonths = (15*12) / 6;
   } else if(catType === "Persian") {
      catMonths = (14*12) / 6;
   }else if(catType === "Ragdoll") {
      catMonths = (16*12) / 6;
   }else if(catType === "American Shorthair") {
      catMonths = (12*12) / 6;
   }else if(catType === "Siberian") {
      catMonths = (11*12) / 6;
   } else {
      chek = true;
      console.log(`${catType} is invalid cat!`);
   }
}

if(gender === "f") {
   if(catType === "British Shorthair") {
catMonths = (14*12) / 6;
   } else if(catType === "Siamese") {
      catMonths = (16*12) / 6;
   } else if(catType === "Persian") {
      catMonths = (15*12) / 6;
   }else if(catType === "Ragdoll") {
      catMonths = (17*12) / 6;
   }else if(catType === "American Shorthair") {
      catMonths = (13*12) / 6;
   }else if(catType === "Siberian") {
      catMonths = (12*12) / 6;
   } else {
      chek = true;
      console.log(`${catType} is invalid cat!`);
   }
}
if(chek === false) {
   console.log(`${catMonths} cat months`);
}
}
catMonth(["Ragdoll",
   "f"
   ])