// function declaration
function calculateTip(price, percentage) {
  // side effect
  console.log("calculateTip() ... ");
  return (percentage / 100) * price;
}
calculateTip(50, 18);

// function experession
var divideByN = function(number, n) {
  return number / n;
};
divideByN(18, 3);

// anonymous function
(function(number, n) {
  console.log("I am an expression");
  return number / n;
})(18, 3);

(() => {
  console.log("from anonymous arrow function");
})();

// arrow function
var arrowFunc = () => {
  console.log("from an arrow function");
};
arrowFunc();
