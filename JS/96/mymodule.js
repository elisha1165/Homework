const fs = require('fs');
const path = require('path');

module.exports = function (dirname, ext, callback){
        let printlist = [];
        fs.readdir(dirname, function (err, list) {
            if (err) {
                return callback(err)
            }

            list.forEach(file => {
                if (`.${ext}` == path.extname(file)) {
                    printlist.push[file];
                }
            })
           // return printlist;
        })
        callback(null, printlist);
    }
