// *** Question ***

const luke = {
  surname: "Skywalker",
  age: 19,
  family: {
    father: "Anakin Skywalker",
    mother: "Padme Amidala",
    siblings: ["Leia"]
  },
  quote: function() {
    console.log("I think that R2 unit may have been stolen");
  }
};

const assignClone = Object.assign({}, luke);
const spreadClone = { ...luke };
const jsonClone = JSON.parse(JSON.stringify(luke));

assignClone.age = 25;
assignClone.family.father = "Darth Vader";

// What is the output?
console.log("luke", luke);
console.log("--------------------------");
console.log("assignClone", assignClone);
console.log("--------------------------");
console.log("spreadClone", spreadClone);
console.log("--------------------------");
console.log("jsonClone", jsonClone);
