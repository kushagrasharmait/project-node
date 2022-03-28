var express = require('express');
const jwt = require('jsonwebtoken')
var routes = require('./routes')
var app = express();

var bodyParser = require('body-parser');
app.use(express.static("myApp")); // myApp will be the same folder name.
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const verifyAaccessToken = async (req, res, next) => {
try{
  if (req.method === "OPTIONS") {
    // Authentication not required
    return next();
}
  if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
      const token = req.headers.authorization.split(" ")[1];
      //body.token = token;
     let ver =  jwt.verify(token,"publicKey");
    console.log(ver)
    next();
    
}}
catch(error){
  res.status(401)
  res.send("invalid token")
}
}

app.use("/api", verifyAaccessToken);
app.use('/', routes);
app.use(function (err, req, res, next) {
     if (res.headersSent) {
          return next(err)
        }
        res.status(500)
        res.send(err.message);
      }     
);
app.listen(9090, 'localhost');
console.log("Server is Listening on port 9090");