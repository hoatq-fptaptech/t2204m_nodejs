const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home");
})
app.get("/shop",function(req,res){
    res.send("shop");
})
app.get("/detail",function(req,res){
    res.send("detail");
})