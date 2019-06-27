// create extend() for inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

// create duplicate() on Shape
Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle() {}

extend(Circle, Shape);

// overwrite duplicate
Circle.prototype.duplicate = function() {
  Shape.prototype.duplicate.call(this); // "duplicate"
  console.log("duplicate circle"); // "duplicate circle"
};

const c = new Circle(1);
