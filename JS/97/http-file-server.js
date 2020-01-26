const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {

    const src = fs.createReadStream(process.argv[3])
    src.pipe(res);

  }).listen(process.argv[2]);