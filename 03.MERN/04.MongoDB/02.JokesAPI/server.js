const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

// This is where we import the users routes function from our user.routes.js file
const AllMyJokesRoutes = require("./server/routes/jokes.routes");
AllMyJokesRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
