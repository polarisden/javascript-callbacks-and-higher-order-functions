// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  let newEmployeeSalaries = [];
  for (let i=0; i<previousSalary.length; i++){
    newEmployeeSalaries.push(previousSalary[i] + 5000) ;
  }
  return newEmployeeSalaries;
}
  //console.log(addSalary5000(employeeSalaries));

function forEach(array, operation) {
  // Start coding here
  let resultFromCallback = operation(array)
  return resultFromCallback
}

// Using `forEach` function here

let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
    function addSalary5000 สังเกตจากเป็น function ที่ถูกใช้ใน function อื่นอีกที โดยแทนใน operation (parameter ของ function forEach)

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
    function forEach สังเกตจากเป็น function ที่ใช้ parameter เป็น function addSalary5000

====================================
*/
