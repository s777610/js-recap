const boomerang = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(() => {
      resolve("returned");
    }, 2000);
  } else {
    reject("stuck in a tree");
  }
});

async function test() {
  try {
    const boomerangStatus = await boomerang;
    console.log("boomerangStatus", boomerangStatus);
  } catch (err) {
    console.log("boomerangStatus", err);
  }
}

test();
