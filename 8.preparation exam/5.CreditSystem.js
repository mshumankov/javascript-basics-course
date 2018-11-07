function creditSystem(args) {

let sumGrade = 0;
let sumCredit = 0

let n = (args[0]);

for(let i = 1; i <= n; i++) {
   let grade = Number(args[i]) % 10;
   sumGrade+= grade;
   let credit = Number(Math.floor(args[i] / 10));
   if(grade === 2) {
      sumCredit+=(credit*0);
   } else if(grade === 3) {
      sumCredit+= (credit*0.5);
   }else if(grade === 4) {
      sumCredit+= (credit*0.7);
   } else if(grade === 5) {
      sumCredit+= (credit*0.85);
   } else if(grade === 6) {
      sumCredit+= credit;
   }

   }
  sumCredit= sumCredit.toFixed(2);
  let averageGrade = (sumGrade / n).toFixed(2);
  console.log(sumCredit);
  console.log(averageGrade);
}

creditSystem([2,
   204,
   206
   ])