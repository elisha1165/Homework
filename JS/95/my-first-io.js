const fs = require('fs');

const buf = fs.readFileSync(process.argv[2]);

const str = buf.toString();

const res = str.split("\n");

console.log(res.length-1);