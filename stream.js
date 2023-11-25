const fs = require("fs");
const path = require("path");

// console.log(__filename);
// console.log(__dirname);

const README_FILE = path.join(__dirname,"docs","readme.md");

const readableStream = fs.createReadStream(README_FILE, { encoding: 'utf-8'});

readableStream.on('data', (data) => {
    console.log(data);
});

readableStream.on('error', (error) => {
    console.log(error);
});

// Writable Stream

// const writableStream = fs.createWriteStream("./output.txt", {
//   encoding: "utf-8",
// });

// writableStream.write(" HEllo \n");
// writableStream.write(" World \n");
// writableStream.end(() => {
//   console.log("finished");
// });
