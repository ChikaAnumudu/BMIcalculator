const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){
  res.sendfile(__dirname  + "/index.html");
  // console.log(__dirname);
});
app.get("/bmiCalculator", function(req, res ){
  res.sendfile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.Weight);
  var height = parseFloat(req.body.Height);
  // var sum = weight / (height^2);//wrong
  var sum = weight / (height*height);//correct

  res.send("Your BMI is " + sum);
});

app.post("/", function(req, res){
  // console.log(req.body.num1);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is  "  + result);

});

app.listen(3000, function(){
  console.log("MidNigth cheering by Emmy Boy");
});
