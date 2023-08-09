// ---------------------------------------------------
// CONTROLLER SETUP - Product
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// 2) Importing Model
const ProductModel = require("../models/product.model");

// 3) Exporting Controller functions

// 3.1) CREATE METHODS
module.exports = {
	getAllProducts: (req, res) => {
		ProductModel.find(
			{},
			{ _id: true, title: true, description: true, description: true }
		)
			.then((products) => {
				res.json({ data: products });
			})
			.catch((error) => {
				res.status(500).json({ error: error });
			});
	},
	getOneProduct: (req, res) => {
		let id = req.params.id;
		if (!ObjectId.isValid(id))
			return res
				.status(400)
				.json({ message: "id doesn't match the expected format" });
		ProductModel.find({ _id: id })
			.then((products) => {
				res.json({ data: products });
			})
			.catch((error) => {
				res.status(500).json({ error: error });
			});
	},
	createProduct: (req, res) => {
		let data = req.body;
		console.log(data);
		ProductModel.create(data)
			.then((products) => {
				res.json({ data: products });
			})
			.catch((error) => {
				if (error instanceof mongoose.Error.ValidationError) {
					let keys = Object.keys(error.errors);
					let error_dict = {};
					keys.map((key) => {
						error_dict[key] = error.errors[key].message;
					});
					res.status(500).json({ error: error_dict });
				} else {
					res.status(500).json({ error: error });
				}
			});
	},
	deleteProduct: (req, res) => {
		let id = req.params.id;
		if (!ObjectId.isValid(id))
			return res
				.status(400)
				.json({ message: "id doesn't match the expected format" });
		ProductModel.deleteOne({ _id: id })
			.then(() => {
				res.json({ success: true });
			})
			.catch((error) => {
				res.status(500).json({ error: error });
			});
	},
	editProduct: (req, res) => {
		let id = req.params.id;
		let data = req.body;
		const updateOptions = {
			new: true, // Return the updated document
			runValidators: true, // Enforce validation during update
		};
		if (!ObjectId.isValid(id))
			return res
				.status(400)
				.json({ message: "id doesn't match the expected format" });
		ProductModel.findByIdAndUpdate({ _id: id }, data, updateOptions)
			.then(() => {
				res.json({ success: true });
			})
			.catch((error) => {
				if (error instanceof mongoose.Error.ValidationError) {
					let keys = Object.keys(error.errors);
					let error_dict = {};
					keys.map((key) => {
						error_dict[key] = error.errors[key].message;
					});
					res.status(500).json({ error: error_dict });
				} else {
					res.status(500).json({ error: error });
				}
			});
	},
};
