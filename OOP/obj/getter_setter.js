function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  // this === the obj we want to add property to
  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location.");
      }
      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
console.log(circle.getDefaultLocation()); // { x: 0, y: 0 }
console.log(circle.defaultLocation); // using getter { x: 0, y: 0 }

console.log(" -- Set new defaultLocation -- ");
circle.defaultLocation = { x: 1, y: 2 };
console.log(circle.getDefaultLocation()); // { x: 1, y: 2 }
console.log(circle.defaultLocation); // using getter { x: 1, y: 2 }
