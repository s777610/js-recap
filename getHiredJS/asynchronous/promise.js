const flip = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("success");
  } else {
    reject("failure");
  }
});

flip
  .then(result => console.log("result", result))
  .catch(err => console.log(err));

console.log("After flip");
