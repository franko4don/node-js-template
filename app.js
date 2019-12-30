//Require all that's needed to power this App
//adding a few documentation
const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const path = require("path");
const app = express();

//=========================================================
//All Middlewares here
//=========================================================
// Tell the bodyparser middleware to accept more data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//allowing for serving static files
app.use(express.static("public"));

app.use(expressValidator());

// allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use('/apidoc',express.static(__dirname + '/public/v1'));
//default landing:
app.get("/apidoc", (req, res) => {
  res.sendFile(path.join(__dirname, "public/v1/apidoc", "index.html"));
});

let AuthRoute = require("./routes/v1/AuthRoute");

// Authentication Route
app.use("/api/v1/auth", AuthRoute);

//=========================================================
//Running the server on Port 3000 default
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on Port ${PORT}`);
});
