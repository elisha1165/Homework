module.exports = function (req, res, next) {
    if (req.query.magicword) {
        if (req.query.magicword != "Please") {
            throw new Error('Please enter the correct magic word and try again');
         } else if (req.query.magicword === "Please") {
            next();
        }
    } else {
        throw new Error('Please enter the magic word before trying to login');
    }

    app.use((error, req, res, next) => {
        res.statusCode = 401;
        res.end(error.message);
    });
}; 