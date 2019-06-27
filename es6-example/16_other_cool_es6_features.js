// More cool ES6 features

// Spread syntax
/*
  - Can be used in places where (e.g.) functions
  expect multiple arguments, multiple elements, or
  multiple variables
*/

function spreadFunction(...multipleArgs) {
  console.log(multipleArgs);
}

const myArray = [1, 2, 3, 4];
const mySecondArray = [5, 6, 7, 8, 9];
const myThirdArray = [...myArray, 5, 6, 7, 8, 9, 10];

// Alternative to Function.prototype.apply

function sayHello(x, y, z) {
  console.log(`Hello, ${x}, ${y}, ${z}`);
}
const helloArray = ["Bob", "Jane", "Peter"];
sayHello.apply(null, helloArray);
// Spread syntax way:
sayHello(...helloArray);

const arr1 = [100, 200, 300];
const arr2 = [40, 50, 60];
arr1.push.apply(arr1, arr2);

const arr1 = [60, 70, 80];
const arr2 = [90, 100, 110];
arr1.push(...arr2);
console.log(arr1);

// concat()
const myArr = ["jelly beans", "cake"];
const myArr2 = ["donuts", "chocolate"];
const myArr3 = ["pie", "lemonade"];
// const newMyArr = myArr.concat(myArr2, myArr3);
const newMyArr = [...myArr, ...myArr2, ...myArr3];
// console.log(newMyArr);

const listOfCarParts = ["gasket", "tires", "radiator", "muffler"];
const listOfPartsToInsert = ["wipers", "headlights"];

function listInserter(arr1, arr2, index) {
  const firstPartOfArray = arr1.slice(0, index);
  const secondPartOfArray = arr1.slice(index);
  const assembledCar = [...firstPartOfArray, ...arr2, ...secondPartOfArray];
  console.log(assembledCar);
}

// listInserter(listOfCarParts, listOfPartsToInsert, 1);

const anotherArr = [10, 1203123, 1203, 1049];
const yetAnotherArr = [...anotherArr];
yetAnotherArr.push(10000);
// console.log(anotherArr, yetAnotherArr);

// vs rest operator
function hasManyArgs(x, y, ...restOfArgs) {
  console.log(x, y);
  for (const prop of restOfArgs) {
    console.log(prop + 10);
  }
}

// hasManyArgs("hi", "hello", 1, 50, 123, 6452, 1232, 243);

// Method definitions
// Pre-ES6, in object literals, methods are defined as function expressions
// E.g:
const myObj = {
  id: 10,
  sayHi: function() {
    console.log("hi");
  }
};

// ES6 has method definitions for creating methods
const myES6Obj = {
  id: 11,
  sayHi() {
    console.log("ES6 is cool!");
  },
  sayBye() {
    console.log("Bye now!");
  }
};

const anotherObj = {
  greet(arg1) {
    console.log(`Hey ${arg1}!`);
  },
  anotherMethod(...args) {
    this.greet(args[0]);
    console.log(`I have ${args.length} arguments!`);
  }
};

// anotherObj.anotherMethod("Tim", 1, false, true, [123], 61);

// Object property shorthands
const a = 10;
const b = 20;
const c = 30;
const d = {
  a: a,
  b: b,
  c: c
};

const e = {
  a,
  bee: b,
  c
};

function objectBuilder(x, y, z, numTimes) {
  const allObjects = [];
  for (let i = 0; i < numTimes; i += 1) {
    const newObj = {
      x: i + 1,
      y,
      z
    };
    allObjects.push(newObj);
  }
  return allObjects;
}

const bob = objectBuilder(10, "bob", false, 10);
const { x: bobID } = bob[0];

// Computed property keys
// Allows use of [] which will evaluate(a.k.a. compute) as the property name

let myID = 0;
const idParam = "userID";
const computedObj = {
  [idParam + ++myID]: "1003411",
  [idParam + ++myID]: "353245425141",
  ["param" + "eter"]: false
};

function capitalizer(word) {
  const a = word.charAt(0).toUpperCase();
  const b = word.slice(1).toLowerCase();
  return a + b;
}

const obj111 = {
  [capitalizer("hello")]: "something",
  [capitalizer("ALLCAPS")]: "sfkakdaada"
};

function dataFormat(arr) {
  const formattedObj = {};
  for (const prop of arr) {
    formattedObj["userID" + prop.x] = prop;
  }
  return formattedObj;
}

// console.log(dataFormat(bob));

// Map object
/*
  - Used for simple key/value pairs
  - Any value can be used for either a key or value (i.e. object, string, function)
  - Reasons for using Map over Object:
    - Object prototype has default keys that might conflict with 
    own keys
    - Keys of map can be anything, whereas with objects, have to be
    string or symbol
    - Can easily get the size of Map
*/

const myMap = new Map();
const firstKey = "key";
const firstVal = "first value :D";
const secondKey = {};
const thirdKey = function() {};

myMap.set(firstKey, firstVal);

myMap.set(secondKey, "anotherValue");

myMap.set(thirdKey, "anotherValueAgain");

// Iterating
// keys(), values(), entries()

// for(const key of myMap.keys()) {
//   console.log(key);
// }

const myMapData = [["keyA", "value one"], ["keyB", "value two"]];
const anotherMap = new Map([["entry1", "val1"], ["entry2", "val2"]]);

// Set object
/* 
  -Lets you store unique values of any type
  -Each element is unique
*/

const mySet = new Set();
const obj123 = { a: 1, b: 2 };
const obj456 = { x: 1, y: 2, z: 3 };
const myString = "Hello there :D";
const aBool = true;
mySet.add(obj123);
mySet.add(obj456);
mySet.add(myString);
mySet.add(aBool);

// mySet.forEach((s) => {
//   if(typeof s === "object") {
//     console.log("we got an object");
//   } else {
//     console.log(s);
//   }
// });

// for(const [key, value] of mySet.entries()) {
//   console.log(`${key} => ${value}`);
// }

// Convert set to array and vice versa
const arrFromSet = Array.from(mySet);
arrFromSet.push(myString);

const myArr123 = [1, 1, 1, 1, 2, 3, 5, 1];
const anotherSet = new Set(myArr123);

const yetAnotherSet = new Set(["a", "z", "q", "t"]);
const anotherArrFromSet = [...yetAnotherSet];
console.log(yetAnotherArrFromSet);
