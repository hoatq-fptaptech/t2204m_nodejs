const Product = require("./../models/product");
exports.get = async (req,res)=>{
    try {
        const rs = await Product.find({});
        res.render("product/list",{
            products: rs
        })
    } catch (error) {
        res.send(error);
    }
};

exports.create = (req,res)=>{
    res.render("product/form");
};

exports.save = async (req,res)=>{
    const data = req.body;
    const product = new Product(data);
    try {
        await product.save();
        res.redirect("/products/");
    } catch (error) {
        res.send(error);
    }
   
};