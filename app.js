const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const cookieParser = require("cookie-parser");

dotenv.config({path:'./config.env'});
require('./db/connect');
app.use(cookieParser());
app.use(express.json());
app.use(require('./router/auth'));
const PORT = process.env.PORT ||5000;

// app.get("/about", (req, res) => {
//   res.send("hello from about");
// });


// app.get("/contact", (req, res) => {
//   res.send("hello from contact");
// });
app.get("/signin", (req, res) => {
  res.send("hello from signin");
});
app.get("/signup", (req, res) => {
  res.send("hello from signup");
});

if(process.env.NODE_ENV ="production"){
 app.use(express.static("client/build"));
}



app.listen(PORT, () => {
  console.log(`server is running at port ${PORT }`);
});
