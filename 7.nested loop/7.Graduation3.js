function graduation(args) {

let i = 0;
let grade = (args[i]);
let chek = false;
while(grade !== "END") {
   let name = (args[i]);
   let sumGrade = 0;
   i++
   grade = (args[i]);
   for(let gradePass = 1; gradePass <= 12; gradePass++) {
      
      if(grade >= 4) {
         sumGrade += grade;
      } else {
         if(chek === true) {
            console.log(`${name} has been excluded at ${gradePass - 1} grade`);
            i++;
            grade = (args[i]);
            break;
         }
         chek = true;
      }
      let average = sumGrade / 12;
      i++;
      grade = (args[i]);
      
      if(gradePass === 12) {
         console.log(`${name} graduated. Average grade: ${(average).toFixed(2)}`);
      }
   }

}
}
graduation(["Kiril",
   6,
   5,
   6,
   5,
   6,
   5,
   6,
   5.5,
   6,
   5.25,
   6,
   5.7,
   "Viktor",
   5,
   6,
   2,
   3,
   "END"
   ])