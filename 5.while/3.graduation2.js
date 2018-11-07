function graduation(args) {
   let name = (args[0]);
   let yearGrade = 1;
   let i = 1;
   let grade = (args[i]);
   let sumGrade = 0;

   while (yearGrade <= 12) {
      if (grade >= 4.00) {
         sumGrade = sumGrade + grade;
         yearGrade++;
      } else {
         break;
      }
      i++;
      grade = (args[i]);

   }
   let averageGrade = (sumGrade / 12).toFixed(2);
   if (yearGrade === 13) {
      console.log(`${name} graduated. Average grade: ${averageGrade}`);
   } else if (yearGrade < 13) {
      console.log(`${name} has been excluded at ${yearGrade} grade"`);
   }

}
graduation(["Mimi", 5, 6, 5, 6, 5, 6, 6, 2, 3,]);