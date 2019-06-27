// don't do that!!
// don't modify built-in object ...
Array.prototype.shuffle = function() {
  // ...
};

const array = [];
array.shuffle();
