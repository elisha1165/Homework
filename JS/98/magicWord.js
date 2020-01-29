const app = require('connect')();
app.use(require('./queryParser'));
//app.use(require('./validation'));

app.use((req, res, next) => {
    if (req.query.magicword) {
        if (req.query.magicword != "Please") {
            throw new Error('Please enter the correct magic word and try again');
        } else if (req.query.magicword === "Please") {
            next();
        }
    } else {
        throw new Error('Please enter the magic word before trying to login');
    }
}); 

app.use((error, req, res, next) => {
    res.statusCode = 401;
    res.end(error.message);
});

app.use('/firstPage', (req, res, next) => {
    res.end('You got to the first page!');
});

app.use('/secondPage', (req, res, next) => {
    res.end('You got to the Second page!');
});

app.use('/thirdPage', (req, res, next) => {
    res.end('You got to the third page!');
});



app.listen(80);