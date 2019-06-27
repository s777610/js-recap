// Symbol() === Symbol() // false
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius; // private property
  }

  [_draw]() {} // private method
}

const c = new Circle(1);
