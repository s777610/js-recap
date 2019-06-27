const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineering: "Dave",
  // [Symbol.iterator] tell for of loop how to iterate engineeringTeam obj
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.manager;
    yield this.engineering;
    yield* this.testingTeam;
  }
};

const names = [];

for (let name of engineeringTeam) {
  names.push(name);
}

console.log(names);
