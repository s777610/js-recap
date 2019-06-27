function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {
    console.log("move");
  };
}

const c1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function() {
  console.log("draw");
};

c1.draw(); // it works even creating obj before define draw

// Return instance members
console.log(Object.keys(c1)); // [ 'radius', 'move' ]

// Return all members (instance + prototype)
for (let key in c1) {
  console.log(key);
}
