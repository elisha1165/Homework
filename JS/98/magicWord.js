const app = require('connect')();
app.use(require('./queryParser'));
app.use(require('./validation'));

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