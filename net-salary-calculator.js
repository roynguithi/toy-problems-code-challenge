function calculateNetSalary(basicSalary, benefits) {

    let grossSalary = basicSalary + benefits;

    //Payee rates in effect from 1st July 2023
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 40000) {
        payee = 2400 + (grossSalary - 24000) * 0.15;
    } else if (grossSalary <= 60000) {
        payee = 4800 + (grossSalary - 40000) * 0.2;
    } else if (grossSalary <= 80000) {
        payee = 8800 + (grossSalary - 60000) * 0.25;
    } else {
        payee = 14800 + (grossSalary - 80000) * 0.3;
    }

    //NHIF rates in effect from 1st July 2023
    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    //NSSF rates in effect from 1st July 2023
    let nssf = grossSalary * 0.06;

    let netSalary = grossSalary - payee - nhif - nssf;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

//Input for basic salary,benefits and net salary
let basicSalary = 70000; 
let benefits = 10000; 
let salaryDetails = calculateNetSalary(basicSalary, benefits);

//Output for Gross salary,Payee,NHIF deductions,NSSF deductions and Net salary
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Tax):", salaryDetails.payee);
console.log("NHIF Deductions:", salaryDetails.nhif);
console.log("NSSF Deductions:", salaryDetails.nssf);
console.log("Net Salary:", salaryDetails.netSalary);