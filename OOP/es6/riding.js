class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  // overwrite method
  // because this method will be accessed first
  move() {
    super.move();
    console.log("circle move");
  }
}

const c = new Circle();
