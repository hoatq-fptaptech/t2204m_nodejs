const { use } = require("../routes/auth.route");
const User = require("./../models/user");
const bcrypt = require("bcryptjs");
exports.register = (req,res)=>{
    const auth = req.session.auth;
    if(auth) return res.send(`Bạn đã login bằng email ${auth.email}`);
    res.render("auth/register");
}
exports.create_user = async (req,res)=>{
    try {
        let existuser = await User.findOne({email:req.body.email});
        if(existuser) return res.status(422).send("Email is exist..");
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashPwd = await bcrypt.hash(req.body.password,salt);
        // save to db
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPwd
        })
        await user.save();
        req.session.auth = {
            name: user.name,
            email:user.email,
        }
        res.send("DONE");
    } catch (error) {
        res.send(error);
    }
}

exports.login =  (req,res)=>{
   res.render("auth/login");     
}
exports.loginUser = async (req,res)=>{
    try {
        let existuser = await User.findOne({email:req.body.email});
        if(!existuser) return res.status(401).send("Email or password is not correct..");
        const verified = await bcrypt.compare(req.body.password,existuser.password);
        if(!verified) return res.status(401).send("Email or password is not correct..");
        // login successfully
        res.send("Login DONE");
    } catch (error) {
        res.send(error);
    }
}

// change password