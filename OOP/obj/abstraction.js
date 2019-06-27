// Abstraction means hiding the complexity/details and showing only the essentials.
// We can hide the details by using private members. Replace "this" with "let".
function Circle(radius) {
  this.radius = radius;

  // those two are private in the view of OOP
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function(factor) {};

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.draw = function() {
    computeOptimumLocation(0.1);
    console.log("draw");
  };
}

const circle = new Circle(10);
console.log(circle.getDefaultLocation()); // { x: 0, y: 0 }

circle.draw();
