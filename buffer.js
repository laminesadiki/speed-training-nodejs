'use strict'

// TODO
/* 
Alter the code so that the buffer is safely allocated.
Do not explicitly fill the buffer with any thing.
If the process prints the buffer and then logs passed!,
the exercise was correctly completed.
*/
const assert = require('assert')
const buffer = Buffer.allocUnsafe(4096)
console.log(buffer)

for (const byte of buffer) assert.equal(byte, 0)
console.log('passed!')