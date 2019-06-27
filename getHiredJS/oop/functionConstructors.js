const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
};

// new makes this pointer to john
const john = new Person("Jonhn", 1999, "teacher");
john.calculateAge();

// the john.__proto__ === Person.prototype
