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
app.use(express.json());
app.use(express.urlencoded({extended:true}));

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
// CRUD products
const productRoutes = require("./src/routes/product.route");
app.use("/products",productRoutes);
//AUTH
const authRoutes = require("./src/routes/auth.route");
app.use("/auth",authRoutes);