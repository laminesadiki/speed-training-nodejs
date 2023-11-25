const fs = require("fs");

// const obj = {
//   year: "2023",
//   month: "November",
//   day: "Saturday",
// };

// fs.writeFileSync("./day.json", JSON.stringify(obj));

const contents = fs.readFileSync("./day.json", { encoding: "utf-8"});
console.log(contents);
