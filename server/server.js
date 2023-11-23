require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
const helmet = require('helmet')
const bodyParser = require('body-parser');
const cors = require("cors");
const router = require("./routes/router");

// connect DB
mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log("DB connected"))
	.catch(error => console.log(error))

const PORT = process.env.PORT || 6000;

const app = express();

app.get('/', async (req, res) => {
	res.send('wellcoime to payment route')
})


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(helmet());

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(cors());


app.use("/api",router);

app.listen(PORT,() => console.log("Server running on port...",PORT));