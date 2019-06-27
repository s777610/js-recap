// "use strict";

const Circle = function() {
  this.draw = function() {
    console.log(this);
  };
};

const c = new Circle();
// Method Call
c.draw(); // Circle { draw: [Function] }

const draw = c.draw;
// Function Call
draw(); // Global obj, but undefined in "use strict";

class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
draw(); // undefined because body of obj is "use strict" by default
