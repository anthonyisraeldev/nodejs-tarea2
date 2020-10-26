const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// DB connection
const db = async () => {
  try {
    const success = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('DB Connected');
  } catch (error){
    console.log('DB Connection Errror ', error);
  }
}

// Execute connection
db();

// Middlewares
app.use(morgan("dev"));


// Port
const port = process.env.PORT || 8080;

// Listen port
app.listen(port, () => {
  console.log(`Server... running on port ${ port }`)
});