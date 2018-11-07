function graduation(args) {
   let name = (args[0]);
   let year = 1;
   let i = 1;
   let grade = (args[i]);
   let sumGrade = 0;

   while (year <= 12) {
      if (grade >= 4.00) {
         sumGrade = sumGrade + grade;
         year++;
      }
      i++;
      grade = (args[i]);

   }
   let averageGrade = (sumGrade / 12).toFixed(2);
   console.log(`"${name} graduated. Average grade: ${averageGrade}`);
}
graduation(["Ani", 5, 5.32, 6, 5.43, 5, 6, 5.5, 4.55, 5, 6, 5.56, 6]);