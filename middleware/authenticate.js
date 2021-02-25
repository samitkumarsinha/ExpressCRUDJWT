const jwt = require('jsonwebtoken');


const authenticateJWT = (req, res, next) => {
    const accessTokenSecret = 'youraccesstokensecret';
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            console.log(req.user)
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticateJWT;