function Artist(name, talent) {
  this.name = name;
  this.talent = talent;
}

class Musician extends Artist {
  constructor(name, talent, instrument) {
    super(name, talent);

    this.instrument = instrument;
  }
}

const frank = new Musician("Frank Sinatra", "singer", "voice");

Object.prototype.info = function() {
  console.log("this", this);
};

// What is the output of
frank.info();

/**
 * 1. Every JavaScript object has a prototype property,
 * which makes inheritance possible.
 *
 * 2. The prototype property of an object is where we put
 * methods and properties that we want other object to inherit
 *
 * 3. The constructor's prototype property is NOT the prototype of
 * constructor itself, it's the prototype of ALL instances that are
 * create through it.
 *
 * 4. When a certain method (or property) is called, the search start in
 * the object itself, and if it cannot be found, the search moves on to
 * the object's prototype. This continues until the method is found.
 */
