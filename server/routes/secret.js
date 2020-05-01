const router = require('express').Router();
const { authorized } = require('../utilities/middleware');

const secretAccess = (req, res) => {
    res.json({
        message: 'Secret access',
        payload: req.user,
    });
};

// manual middleware
router.get('/secret1', authorized, secretAccess);

// with express-jwt middleware
router.get('/secret2', secretAccess);

module.exports = router;
