const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { v4: uuId } = require('uuid');

const SECRET_SIGN = process.env.JWT_SECRET_SIGN;

const createAuth = (req, res) => {
    // eslint-disable-next-line no-unused-vars
    const { username, password } = req.body;

    // use bcrypt to check password
    // const passwordVerified = await bcrypt.compare(password, saved.password)

    // create JWT token
    jwt.sign(
        {
            uid: uuId(),
            name: username,
            birth: new Date().toISOString(),
        },
        SECRET_SIGN,
        {
            expiresIn: '10m', // 1 minute so we can see the expiration error
            issuer: 'https://auth.heap.dk/challenge',
        },
        (err, token) => {
            if (err) throw err;
            // send token
            else res.json({ token });
        },
    );
};

router.post('/login', createAuth);

module.exports = router;
