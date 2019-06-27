const a = 5;
const b = 3;

function add(a, b, callback) {
  callback(a + b);
}

add(a, b, c => {
  console.log(`Result is: ${c}`);
});
