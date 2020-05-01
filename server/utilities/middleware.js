
const jwt = require('jsonwebtoken');

const SECRET_SIGN = process.env.JWT_SECRET_SIGN;

const authorized = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.indexOf('Bearer ') === 0) {
        // check and validate token
        const token = req.headers.authorization.substring(7); // "Bearer ..."
        jwt.verify(token, SECRET_SIGN, (err, payload) => {
            req.user = payload; // attach payload to user (will be null if not verified)
            return next(err); // if verified, err is null and will continue to the next middleware
        });
    } else {
        next(new Error('No valid token was passed'));
    }
};

exports.authorized = authorized;
