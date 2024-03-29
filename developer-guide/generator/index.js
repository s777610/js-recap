const testingTeam = {
  lead: "Wilson",
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
  manager: "ALex",
  engineer: "Dave",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
console.log(names); // [ 'Jill', 'ALex', 'Dave', 'Wilson', 'Bill' ]
