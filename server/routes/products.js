const router = require('express').Router();

const products = require('../data/products.json');

let totalProducts = products.length + 1; // for auto-increment

// finds the array index of a given product id
const findProductIndex = (id) => products.findIndex((x) => x.id.toString() === id);

// GET /products
// lists all products
const listAllProducts = (req, res) => res.json(products);

// GET /products/1
// returns a single product
const getSingleProduct = (req, res) => {
    const idx = findProductIndex(req.params.id || '0');
    res.json(products[idx]);
};

// DELETE /products/1
// deletes product id 1
const deleteProductById = (req, res) => {
    const idx = findProductIndex(req.params.id || '0');

    products.splice(idx, 1); // remove product

    // res.redirect('/products');
    res.json(products);
};

// PUT /product/5
// updates product price
const updateProductPriceById = (req, res) => {
    const idx = findProductIndex(req.params.id || '0');
    const { price } = req.body;

    if (price) {
        products[idx].price = parseFloat(price);
    }

    // res.redirect('/products');
    res.json(products);
};

// POST /products { price: 80 }
// adds product with price = 80, defaults to 99
const addProduct = (req, res) => {
    const price = req.body.price ? parseFloat(req.body.price) : 99;
    const product = {
        id: totalProducts,
        name: `Product ${totalProducts}`,
        price,
    };
    totalProducts += 1;
    products.push(product);

    // res.redirect(`/products/${totalProducts}`);
    res.json(product);
};

router.get('/products', listAllProducts);
router.get('/products/:id', getSingleProduct);
router.delete('/products/:id', deleteProductById);
router.put('/products/:id', updateProductPriceById);
router.post('/products', addProduct);

module.exports = router;
