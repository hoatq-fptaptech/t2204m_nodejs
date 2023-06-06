const mongoose = require("mongoose");
const user = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength:[6,"Tên phải có độ dài tối thiểu là 6"],
        maxLength:100
    },
    email:{
        type:String,
        required:true,
        minLength:[6,"Email phải có độ dài tối thiểu là 6"],
        maxLength:100,
        unique:true,
        validate: {
            validator: (v)=>{
                const emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return v.match(emailPattern);
            },
            message: (t)=>`${t.value} không phải là email`
        }
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        maxLength:255
    },
    permissions: Array
});
module.exports = mongoose.model("User",user);