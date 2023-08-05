const { getAllProducts, getOneProduct, createProduct, deleteProduct, editProduct } = require("../controllers/product.controller");

module.exports = (app) => {
    app.get('/products/', getAllProducts);
    app.post('/products/', createProduct);
}