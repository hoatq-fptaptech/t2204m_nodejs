const e = require("express");
const express = require("express");
const app = express();
const database = require("./src/database");
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    const Product = require("./src/models/product");
    Product.find({})
        .then(rs=>{
            res.render("home",{
                products: rs
            })
        })
        .catch(err=>{
            res.send(err);      
        })

})
app.get("/shop",function(req,res){
    res.send("shop");
})
app.get("/detail",function(req,res){
    res.send("detail");
})