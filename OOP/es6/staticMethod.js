class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method, and inside __proto__
  draw() {}

  // Static Method, not inside an instance but class
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);

// another example
class Math2 {
  static abs(value) {
    // ...
  }
}

Math2.abs();
