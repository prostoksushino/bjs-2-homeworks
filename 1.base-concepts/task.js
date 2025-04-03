"use strict";

function solveEquation(a, b, c) {
  const d = Math.pow(b, 2) - 4 * a * c; 
  const roots = [];

  if (d < 0) {

    return roots;
  } else if (d === 0) {

    const x = -b / (2 * a);
    roots.push(x);
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    roots.push(x1, x2);
  }

  return roots;
}


console.log(solveEquation(1, -3, 2));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 0, 1));



"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = (percent / 100) / 12; 
  const creditBody = amount - contribution;  

  if (creditBody <= 0) {
    return 0;
  }

  const monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

  const totalPayment = monthlyPayment * countMonths;

  return Number(totalPayment.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));   
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); 
console.log(calculateTotalMortgage(10, 0, 20000, 24));   
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); 
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36)); 