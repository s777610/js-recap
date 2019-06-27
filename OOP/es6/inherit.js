class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    // all method are inside __proto__ of Shape
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  // all method are inside __proto__ of Circle
  draw() {
    console.log("draw");
  }
}

const c = new Circle("red", 1);
