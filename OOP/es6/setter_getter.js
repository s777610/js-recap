const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    _radius.set(this, value);
  }
}

// get value
const c = new Circle(1);
console.log(c.radius);

// set value
c.radius = 10;
console.log(c.radius);
