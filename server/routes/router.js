const { Router } = require("express");
const Product = require("../models/product");
const multer = require("multer");

const cloudinary = require("cloudinary").v2;

const router = Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const filename = `${file.fieldname}-${Date.now()}${extension}`;
    cb(null, filename);
  },
});

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



// Create a multer upload instance
const upload = multer({ storage });

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




router.post("/add", upload.single("product"), async (req, res, next) => {
  try {
    const { price, for: productFor, type } = req.body; 

    const result = await cloud(req.file?.product);

    await Product.create({ price, for: productFor, type, image: result })
      .then(() => res.status(201).send({ message: "Product added!" }))
      .catch(() => res.status(400).send({ message: "An error occurred!" }));

  } catch (error) {
    next(error);
  }
});


require('dotenv').config();


router.post('/paystack/payment', async (req, res) => {
	console.log('solohitechnology')
  const { amount, email } = req.body;

  try {
    const response = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email: email,
        amount: amount,
        currency: 'USD', // Set the currency to USD
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const responseData = {
      message: 'solohitech',
      input1: amount,
      email: email,
      amount: amount,
      paystackResponse: response.data.data.authorization_url,
    };

    console.log(responseData.paystackResponse);
    res.json(responseData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the payment.' });
  }
});

	


module.exports = router;