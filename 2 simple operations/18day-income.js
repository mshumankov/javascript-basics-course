function dayIncome(input){
   let workDaysMonth = Number(input[0]);
   let earnByDay = Number(input[1]);
   let converterToLeva = Number(input[2]);
   let monthSalary = (workDaysMonth*earnByDay);
   let yearSalary = (monthSalary*(12+2.5));
   let netYearSalary =(yearSalary-(yearSalary*0.25));
   let netYearSalaryLeva = (netYearSalary*converterToLeva);
   let profitByDay = (netYearSalaryLeva/365);
   console.log((profitByDay).toFixed(2));
}
dayIncome([15, 105, 1.71])