class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;

    this.emp_name = emp_name;

    this.emp_dept = emp_dept;

    this.emp_salary = emp_salary;

    this.emp_company = emp_company;
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");

const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");

const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");

const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");

const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");

const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmps = [
  emp_anil,

  emp_radha,

  emp_rishi,

  emp_sonali,

  emp_monika,

  emp_viny,

  emp_mahi,
];

console.log(`Employees from Wipro Company-----------`);
let employeeOfWipro = arrayEmps.filter(
  (employee) => employee.emp_company === "Wipro"
);

for (const elements of employeeOfWipro) {
  console.log(elements);
}

console.log(`Employees from IT & HR Department----------`);
let employeeOfItHr = arrayEmps.filter(
  (employee) => employee.emp_dept === "IT" || employee.emp_dept === "HR"
);

for (const elements of employeeOfItHr) {
  console.log(elements);
}

console.log(`Employee whose emp_Id Greater than 50------------`);
let employeeGraterId = arrayEmps.filter((employee) => employee.emp_id > 50);

for (const elements of employeeGraterId) {
  console.log(elements);
}

console.log(`Employee whose name start with A, V, M----------`);
let employeeNamestart = arrayEmps.filter(
  (employee) =>
    employee.emp_name.startsWith("A") ||
    employee.emp_name.startsWith("V") ||
    employee.emp_name.startsWith("M")
);

for (const elements of employeeNamestart) {
  console.log(elements);
}

console.log(`Average salary for All Department----------`);

let sumOfSalary = arrayEmps.reduce((sum, employee) => {
  return sum + employee.emp_salary;
}, 0);
console.log(sumOfSalary / arrayEmps.length);

console.log(`Average salary for IT Department---------`);
const itEmployee=arrayEmps.filter((employee) => employee.emp_dept === "IT")
  const sumSalaryOfIt= itEmployee.reduce((sumSalary, employee) => {
    return sumSalary + employee.emp_salary;
  }, 0);
  console.log(sumSalaryOfIt/itEmployee.length);