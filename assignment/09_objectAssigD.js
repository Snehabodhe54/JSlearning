let professor = {
  ID: 111,
  Name: "Herry",
  Place: "pune",
  Experience: 10,
  Age: 40,
};
professor.Degrees = {
  engineering: "CSC",
  PHD: "Adv Computing",
  collegeName: " CPEC",
};
professor.certificates = [
  "Hacker Rank Participition",
  "certificate in IFC course",
  "Certificate in Adv Programming",
];

let values = function () {
  concatCertificates = "";
  for (let index = 0; index < professor.certificates.length; index++) {
    const element = professor.certificates[index];
    concatCertificates = concatCertificates + element + " ";
  }
  console.log(concatCertificates);
};
values();
professor.totalExperience = "14 years";
console.log(professor);
professor.ID = 222;
console.log(professor);
professor.certificates.push("Oracle Certified");
let lastElement = professor.certificates.slice(
  professor.certificates.length - 1
);
console.log(lastElement);
