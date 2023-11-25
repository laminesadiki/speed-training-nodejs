const bf = Buffer.alloc(10);
const bfUnsafe = Buffer.allocUnsafe(4096);
// console.log(bf);
// console.log(bfUnsafe);
// console.log(bf instanceof Buffer);
// console.log(bf instanceof Uint8Array);

const strBuf = Buffer.from("أ");
console.log(strBuf);
console.log(strBuf.toString("hex"));
