require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/router");

// connect DB
mongoose.connect(process.env.DB_LOCAL)
	.then(() => console.log("DB connected"))
	.catch(error => console.log(error))

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(cors());


app.use("/api/",router);

app.listen(PORT,() => console.log("Server running on port....",PORT));