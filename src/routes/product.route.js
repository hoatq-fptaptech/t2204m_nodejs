const express = require("express");
const router = express.Router();
const Product = require("./../models/product");
router.get("/",(req,res)=>{
    Product.find({})
        .then(rs=>{
            res.render("product/list",{
                products: rs
            })
        })
        .catch(err=>{
            res.send(err);      
        })
});
router.get("/create",(req,res)=>{
    res.render("product/form");
});
router.post("/create",(req,res)=>{
    const data = req.body;
    const product = new Product(data);
    product.save()
    .then(rs=>{
        res.redirect("/products/");
    }).catch(err=>{
        res.send(err);
    })
});

module.exports = router;