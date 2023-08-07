class Vehicles {
  constructor(company, color, type, speed, prize) {
    this.company = company;
    this.color = color;
    this.type = type;
    this.speed = speed;
    this.prize = prize;
  }
  show() {
    console.log(
      `Company of vehicle is ${this.company}, Color is ${this.color}, Type of vehicle is ${this.type}, vehicle has speed of ${this.speed}, and the Prize is ${this.prize}`
    );
  }
}
let car = new Vehicles("Hyundai", "black", "four-wheeler", "500km/h", 800000);
let bike = new Vehicles("Honda", "red", "two-wheeler", "120km/h", 100000);
let truck = new Vehicles(
  "Mahindra",
  "green",
  "sixteen-wheeler",
  "200km/h",
  1000000
);
let auto = new Vehicles("Hyundai", "black", "three-wheeler", "60km/h", 200000);
let thar = new Vehicles("thar", "grey", "four-wheeler", "600km/h", 1700000);

console.log(`Traversing all vehicles`);
let AllVehicle = [car, bike, truck, auto, thar];
for (const Vehicles of AllVehicle) {
  Vehicles.show();
}

class College {
  constructor(Name, collegeName, rollNumber, degree) {
    this.Name = Name;
    this.collegeName = collegeName;
    this.rollNumber = rollNumber;
    this.degree = degree;
  }
  display() {
    console.log(
      `Student name is ${this.Name}, and college name is ${this.collegeName}, roll number is ${this.rollNumber},learning ${this.degree} degree`
    );
  }
}
let jenny = new College("jenny", "CMEP", "111", "BCA");
jenny.display();
let stew = new College("stew", "MIT", "222", "MCA");
stew.display();
let harry = new College("harry", "IIT", "333", "BTECH");
harry.display();
let jonh = new College("jonh", "SST", "444", "MTECH");
jonh.display();

function traverseObject(object) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      console.log(`${key} ${element}`);
    }
  }
}

traverseObject(jenny);
traverseObject(stew);
traverseObject(harry);
traverseObject(jonh);
