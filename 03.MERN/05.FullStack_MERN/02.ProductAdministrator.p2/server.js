// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

// 1) Imports of 3rd-party Libraries
const express = require("express");
const cors = require("cors");

// 2) Intiliazing Express instance ('app') and define auxiliar variables
const app = express();
const port = 8000;

// 3) Enabling settings for being able to read JSON and parse url encoded data in requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4) Configuring cors in Express instace ('app')
const corsOptions = {
	origin: "http://localhost:3000", // Allow only this origin
	methods: "GET, POST, PUT, DELETE", // Allow these methods
};
app.use(cors(corsOptions));

// 5) Initializing connection to NoSQL database (MongoDB) using Moongose interface
require("./server/config/mongoose.config");

// 6) Importing API routes and incorporating them to 'app' instance
const ProductRouter = require("./server/routes/product.routes");
ProductRouter(app);

// 7) Running instance of Express server in selected port
app.listen(port, () => console.log(`Server started at port: ${port}`));
