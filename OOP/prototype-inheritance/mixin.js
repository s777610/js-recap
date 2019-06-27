// Use mixins to combine multiple objects
// and implement composition in JavaScript.

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log("eating...");
  }
};

const canWalk = {
  walk: function() {
    console.log("walking...");
  }
};

const canSwim = {
  swim: function() {
    console.log("swim");
  }
};

// define Person obj constructor
function Person() {}
mixin(Person.prototype, canEat, canWalk);
// Object.assign(Person.prototype, canEat, canWalk); same as mixin ...
const person = new Person();
console.log(person); // in __proto__, eat: [Function: eat], walk: [Function: walk]

// define fish obj constructor
function Fish() {}
mixin(Fish.prototype, canEat, canSwim);
const goldfish = new Fish();
console.log(goldfish);
