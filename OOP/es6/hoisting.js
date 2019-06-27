console.log(number);

sayHello(); // it's fine
// Func Declaration is hoisting
function sayHello() {}

// Func Expression, can't use those before declare
const sayGoodbye = function() {};
const number = 1;

// class declaration is not hoisting
class Circle {}

// Class Expression is not hoisting
const Square = class {};
