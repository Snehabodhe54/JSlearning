let sbiBank = {
  bankName: "SBI",
  location: "Pune",
  accountNo: 220110330,
  ifsc: "SBIN1015500",
  interestRate: "5%",
  showDetails: function () {
    console.log(
      `sbiBank: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`
    );
  },
};
let axisBank = {
  bankName: "AXIS",
  location: "Pune",
  accountNo: 211110330,
  ifsc: "AXISN1015500",
  interestRate: "2%",
  showDetails: function () {
    console.log(
      `sbiBank: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`
    );
  },
};
let hdfcBank = {
  bankName: "HDFC",
  location: "kharadi",
  accountNo: 220000330,
  ifsc: "HDFCN1015500",
  interestRate: "7%",
  showDetails: function () {
    console.log(
      `sbiBank: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`
    );
  },
};
let yesBank = {
  bankName: "yes",
  location: "Mumbai",
  accountNo: 220110000,
  ifsc: "YESN1015500",
  interestRate: "10%",
  showDetails: function () {
    console.log(
      `sbiBank: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`
    );
  },
};

sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
