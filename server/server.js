// Including env file here
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000
app.use(cors());

// Importing Routes
const itemRoute = require("./routes/todoRoute");
app.use(bodyParser.json());
app.use("/todo", itemRoute);


// Connection to MongoDB here
mongoose.connect(process.env.MONGO_DB, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true})

const db = mongoose.connection
db.on("error", (err)=>{
    console.log(err);
})
db.once("open", ()=>{
    console.log("MongoDB Connection Successful..");
})



app.listen(PORT, (req, res)=>{
    console.log(`Server started on PORT ${PORT}`);
})