const router = require('express').Router();
const { check, validationResult } = require('express-validator');

let objectToSave = {};

// validate object
const validationConstrains = [
    check('id').isLength({ min: 32, max: 32 }),
    check('name').not().isEmpty(),
    check('birth').isISO8601(),
    check('products.*.id').isInt({ gt: 0, lt: 10 }),
    check('products.*.name').not().isEmpty(),
    check('products.*.price').isInt({ gt: 100, lt: 500 }),
];

const addData = (req, res) => {
    const errors = validationResult(req);

    // validate
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    // save
    objectToSave = req.body;

    res.json({
        message: 'Object data saved',
    });
};

const getData = (req, res) => res.json(objectToSave);

router.post('/object', validationConstrains, addData);
router.get('/object', getData);

module.exports = router;
