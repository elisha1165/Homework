const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3],function (err, data) {
	if (err) {
		return console.error(err)
    }
    data.forEach(file => {
        console.log(file);
    });
})

// prinlist.forEach(file => {
//     console.log(file);
// });