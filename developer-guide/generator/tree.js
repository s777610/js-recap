//////////////////////
// create the class //
//////////////////////
class Comment {
  constructor(text, children) {
    this.text = text;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.text;
    for (let child of this.children) {
      yield* child;
    }
  }
}

////////////////////
// build the tree //
////////////////////
const children = [
  new Comment("good comment", []),
  new Comment("bad comment", []),
  new Comment("meh comment", [])
];
const tree = new Comment("Great post!", children);
console.log(tree);

//////////////////////////
// loop the entire tree //
//////////////////////////
const values = [];

for (let value of tree) {
  values.push(value);
}

console.log(values);
