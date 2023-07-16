const salary =  Number(prompt("Введіть розмір вашої зарплати:"))
console.log(salary);
const premium = 15;
const result = salary / 100 * premium;
console.log(result);
const salaryPremium = salary + result;
const tax = 10;
let minusTax = salaryPremium / 100 * tax;
console.log(minusTax);
const salaryPremiumMinusTax = salaryPremium - minusTax;
console.log(salaryPremiumMinusTax);
const cost = 190
const total = salaryPremiumMinusTax - cost;
alert(total);

