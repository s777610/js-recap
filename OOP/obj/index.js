// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}

const circle1 = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
  // return this; // this happen when using new
}

// they are same
Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);
const circle = new Circle(1);

// print all props
for (let key in circle) {
  // get all functions
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}

// print an array of keys
const keys = Object.keys(circle);
console.log(keys);

// check if circle has radius as props
if ("radius" in circle) {
  console.log("Circle has a radius.");
}
