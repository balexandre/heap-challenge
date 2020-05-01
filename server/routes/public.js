const router = require('express').Router();

const publicAccess = (req, res) => {
    res.json({
        message: 'Public access',
    });
};

router.get('/public', publicAccess);

module.exports = router;
