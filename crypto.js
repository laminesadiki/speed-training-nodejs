const { pbkdf2 } = require("crypto");

const startTime = Date.now();

pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  if (err) throw err;
//   console.log(derivedKey.toString("hex"));
  console.log("1: duration = ", Date.now() - startTime);
});

pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
    if (err) throw err;
  //   console.log(derivedKey.toString("hex"));
    console.log("2: duration = ", Date.now() - startTime);
  });
  pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
    if (err) throw err;
  //   console.log(derivedKey.toString("hex"));
    console.log("3: duration = ", Date.now() - startTime);
  });
  pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
    if (err) throw err;
  //   console.log(derivedKey.toString("hex"));
    console.log("4: duration = ", Date.now() - startTime);
  });

  pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
    if (err) throw err;
  //   console.log(derivedKey.toString("hex"));
    console.log("5: duration = ", Date.now() - startTime);
  });

  pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
    if (err) throw err;
  //   console.log(derivedKey.toString("hex"));
    console.log("6: duration = ", Date.now() - startTime);
  });
