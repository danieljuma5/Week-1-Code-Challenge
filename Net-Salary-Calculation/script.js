function calculateSalary() {
  //prompt user for basic salary and benefits information
  const basicSalary = parseFloat(document.getElementById("basic-salary").value);

  const benefits = parseFloat(document.getElementById("benefits").value);


  // Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate Payee Tax
let payeeTax = 0;
if (grossSalary <= 24000) {
  payeeTax = (grossSalary) * 0.1;
} else if (grossSalary <= 32333) {
  payeeTax = (grossSalary - 24000) * 0.25;
} else {
  payeeTax =(grossSalary - 32333) * 0.30;
}

// Calculate NHIF
let nhifDeduction = 0;
if (grossSalary <= 5999) {
  nhifDeduction = 150;
} else if (grossSalary <= 7999) {
  nhifDeduction = 300;
} else if (grossSalary <= 11999) {
  nhifDeduction = 400;
} else if (grossSalary <= 14999) {
  nhifDeduction = 500;
} else if (grossSalary <= 19999) {
  nhifDeduction = 600;
} else if (grossSalary <= 24999) {
  nhifDeduction = 750;
} else if (grossSalary <= 29999) {
  nhifDeduction = 850;
} else if (grossSalary <= 34999) {
  nhifDeduction = 900;
} else if (grossSalary <= 39999) {
  nhifDeduction = 950;
} else if (grossSalary <= 44999) {
  nhifDeduction = 1000;
} else if (grossSalary <= 49999) {
  nhifDeduction = 1100;
} else if (grossSalary <= 59999) {
  nhifDeduction = 1200;
} else if (grossSalary <= 69999) {
  nhifDeduction = 1300;
} else if (grossSalary <= 79999) {
  nhifDeduction = 1400;
} else if (grossSalary <= 89999) {
  nhifDeduction = 1500;
} else if (grossSalary <= 99999) {
  nhifDeduction = 1600;
} else {
  nhifDeduction = 1700;
}

// Calculate NSSF Deduction
const nssfDeduction = Math.min(grossSalary * 0.06, 1800);

// Calculate net salary
const netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;

// Output results
const outputElement = document.getElementById("output");
 outputElement.innerHTML = `<strong>Gross Salary: </strong> ${grossSalary.toFixed(2)}<br>
                         <strong style="color:blue">Payee Tax: </strong> ${payeeTax.toFixed(2)}<br>
                         <strong style="color:red">NHIF Deduction: </strong> ${nhifDeduction.toFixed(2)}<br><strong style="color:red">NSSF Deduction: </strong>${nssfDeduction.toFixed(2)}<br><strong style="color:green" >YOUR NET SALARY IS: </strong>${netSalary.toFixed(2)}`;
}