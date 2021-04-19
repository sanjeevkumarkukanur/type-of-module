
// Path module
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);


// OS module

const os = require('os')
var totalmemory = os.totalmem();
var freememory = os.freemem();

console.log(`totalmemory: ${totalmemory}`)
console.log(`freememory: ${freememory}`)