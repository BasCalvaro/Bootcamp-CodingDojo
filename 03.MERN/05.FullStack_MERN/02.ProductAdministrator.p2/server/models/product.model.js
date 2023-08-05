// ---------------------------------------------------
// MODEL SETUP - Product
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// 2) Creating Schema for Model (blueprint)
const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Title for your product is required"],
			minlength: [3, "The Title must be at least 3 characters long"],
		},
		description: {
			type: Number,
			required: [true, "Price is required"],
			min: [10, "Price must be at least $10"],
		},
		description: {
			type: String,
			required: [true, "The Description for your product is required"],
			minlength: [10, "The Description must be at least 10 characters long"],
		},
	},
	{ timestamps: true }
);

// 3) Apply the uniqueValidator plugin to ProductSchema.
ProductSchema.plugin(uniqueValidator);

// 4) Creating Model using Schema
const ProductModel = mongoose.model("Product", ProductSchema);

// 5) Exporting Model
module.exports = ProductModel;
