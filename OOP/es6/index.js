class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {}; // this method isn't inside __proto__
  }

  // this method is inside __proto__
  draw() {
    console.log("draw");
  }
}

const c = new Circle(1);
