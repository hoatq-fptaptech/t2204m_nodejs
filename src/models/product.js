const mongoose = require("mongoose");
const product = new mongoose.Schema({
    name:String,
    price: Number,
    qty: Number,
    brand:String
});

module.exports = mongoose.model("Product",product);