const {
	getAllProducts,
	getOneProduct,
	createProduct,
	deleteProduct,
	editProduct,
} = require("../controllers/product.controller");

module.exports = (app) => {
	app.get("/products/", getAllProducts);
	app.get("/products/:id", getOneProduct);
	app.post("/products/", createProduct);
	app.delete("/products/:id", deleteProduct);
	app.put("/products/:id", editProduct);
};
