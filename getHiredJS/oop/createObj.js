const personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};

// 1
const john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1998;
john.job = "Teacher";

john.calculateAge();

// 2
const jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1978 },
  job: { value: "Designer" }
});

jane.calculateAge();
