const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	image: {
		type: String,
		trim: true,
	},
	price: {
		type: String,
	},
	for:{
		type: String,
		trim: true,
	},
	type: {
		type: String,
		trim: true
	}
},{ timestamp: true });

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;