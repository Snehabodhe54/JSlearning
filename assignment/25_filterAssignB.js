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
const emp_monika = new Employee(77, "monaka", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`Company & Name of employee whose company is TCS-----------------`);

const NameCompany = array.filter((employee) => employee.emp_company === "TCS");
NameCompany.forEach((employee) => {
console.log(`Company:${employee.emp_company} Name:${employee.emp_name}`); 
});


console.log(`average salary from company wipro-----------------`);

let empWipro = array.filter((employee) => employee.emp_company === "Wipro");
let salary = 0;
empWipro.forEach((employee) => {
  salary = salary + employee.emp_salary;
});
console.log(salary / empWipro.length);

console.log(`average salary from company wipro or infy----------`);
let empWiproInfy = array.filter(
  (employee) =>
    employee.emp_company === "Wipro" || employee.emp_company === "Infy"
);
let salary1 = 0;
empWipro.forEach((employee) => {
  salary1 = salary1 + employee.emp_salary;
});
console.log(salary1 / empWiproInfy.length);
