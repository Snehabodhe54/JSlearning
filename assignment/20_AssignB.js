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
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinay = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "mahesh", "HR", 850000, "Infy");

const arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_vinay,
  emp_mahi,
];

console.log(
  `------------------------------------------Step 1-----------------------------`
);

arrayEmployees.forEach((value) => {
  if (value.emp_company == "TCS") {
    console.log(`Name-${value.emp_name}, Company-${value.emp_company}`);
  }
});

console.log(
  `-------------------------------------------Step 2-----------------------------`
);

arrayEmployees.forEach((value) => {
  if (value.emp_dept == "Finance") {
    console.log(` Department-${value.emp_dept} Name-${value.emp_name}`);
  }
});

console.log(
  `------------------------------------------Step 3-----------------------------`
);

arrayEmployees.forEach((value) => {
  const start = value.emp_name;
  if (start.startsWith("R") == true) {
    console.log(
      `Details: ID-${value.emp_id}, Name-${value.emp_name}, Department-${value.emp_dept}, salary-${value.emp_salary}, Company-${value.emp_company} `
    );
  }
});

console.log(
  `------------------------------------------Step 4-----------------------------`
);

arrayEmployees.forEach((value) => {
  if (value.emp_salary > 75000) {
    console.log(
      ` Name-${value.emp_name},  Company-${value.emp_company}, salary-${value.emp_salary}`
    );
  }
});

console.log(
  `------------------------------------------Step 5-----------------------------`
);

arrayEmployees.forEach((value) => {
  if (value.emp_salary >= 50000 && value.emp_dept == "IT") {
    console.log(
      `Details: ID-${value.emp_id}, Name-${value.emp_name}, Department-${value.emp_dept}, salary-${value.emp_salary}, Company-${value.emp_company} `
    );
  }
});

console.log(
  `------------------------------------------Step 6-----------------------------`
);

arrayEmployees.forEach((value) => {
  if (value.emp_company == "Infy") {
    console.log(
      `Details: ID-${value.emp_id}, Name-${value.emp_name}, Department-${value.emp_dept}, salary-${value.emp_salary}, Company-${value.emp_company} `
    );
  }
});
