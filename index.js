// jshint esversion:6

const bodyParser = require("body-Parser");
const express = require("express");
const app = express();
const https = require("https");
// const request = require("request");
// specifies a static folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000,function(){console.log("Listening to port 3000, BIIIIITCH");});
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(response){
  console.log(response.body.name);
});



// d67eab72bca4289858763bc8d9f9becc-us8
// fec5f1f86a
