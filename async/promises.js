// ) 1
function doStuff(data, callback) {
  if (data) {
    callback("done");
  } else {
    callback("not done");
  }
}

doStuff(false, result => {
  console.log(result);
});

console.log("--------");

// ) 2
function doStuffPromise(data) {
  return new Promise((resolve, reject) => {
    let successMessage = {
      status: "success",
      message: "All is well!"
    };

    let errorMessage = {
      status: "error",
      message: "Oops, there was an error!"
    };

    if (typeof data === "boolean" && data === true) {
      resolve(successMessage);
    } else {
      reject(errorMessage);
    }
  });
}

doStuffPromise(false)
  .then(successMessage => {
    console.log(successMessage);
  })
  .catch(err => {
    console.log(err);
  });

// ) 3
doStuffPromise(true)
  .then(() => {
    console.log("First doStuffPromise resolved");
    return doStuffPromise(true);
  })
  .then(() => {
    console.log("Second doStuffPromise resolved");
  })
  .catch(() => {
    console.log("An error occured");
  });
