const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Any request that goes to "api/items/*", to go to this file
const items = require("./routes/api/items");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
// Bringing keys.js in
const db = require("./config/keys").mongoURI

// Connects to database using mongoose
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err))
    
// Use Routes
// Gives error if nothing is in the items folder
app.use("/api/items", items)



// process.env.PORT is for Heroku deployment
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))