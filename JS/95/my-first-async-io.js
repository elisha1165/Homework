const fs = require('fs');



fs.readFile(process.argv[2], 'utf8', function (err, str) {
    
    const res = str.split("\n");

    console.log(res.length - 1);
})

