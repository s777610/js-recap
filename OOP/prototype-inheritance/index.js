function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype.draw = function() {
  console.log("draw");
};
// Circle.prototype.constructor = Circle // default
// Circle.prototype = Object.create(Object.prototype); // default
// create a obj which inherit from Shape base
Circle.prototype = Object.create(Shape.prototype); // first arg is a obj to use as a prototype
Circle.prototype.constructor = Circle; // we have to reset back constructor
// now, Circle inherit from Shape ...

function Square(size) {
  this.size = size;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

// Prototype Chain
// Circle => Circle base => Shape base => Object base
const s = new Shape();
const c = new Circle(1);
