const { Router } = require("express");
const Product = require("../models/product");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const router = Router();

// set up cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SEC,
});

// upload function for cloudinary
const cloud = async (value) => {
  return await cloudinary.uploader
    .upload(value, { overwrite: true, invalidate: true, resource_type: "auto" })
    .then((result) => {
      if (result && result.secure_url) {
        return result.secure_url;
      }
    })
    .catch((error) => error);
};

// get all products
router.get("/",async (req,res,next) => {
	try{
		const products = await Product.find();
		return res.status(200).send(products);
	} catch(error){
		next(error);
	}
});

// get single product by id
router.get("/:id",async (req,res,next) => {
	try{

	const { id } = req.params;

	const product = await Product.findById(id);
	return res.status(200).send(product);

	} catch(error){
		next(error);
	}
});

// get product by category
router.get("/",async (req,res,next) => {
	try{
		const { q } = req.query;
		const cat = await Product.find({ type: q });
		return res.status(200).send(cat);
	} catch(error){
		next(error);
	}
});

// add product
router.post("/add",multer.single("product"),async (req,res,next) => {
	try{
		const { price,for,type } = req.body;

		const result = await cloud(req.file?.product);

		await Product.create({ price, for, type, image: result })
			.then(() => res.status(201).send({ message: "Product add!" }))
			.catch(() => res.status(400).send({ message: "An error occured!" }));

	} catch(error){
		next(error);
	}
});


module.exports = router;