exports.guest = (req,res,next)=>{
    const auth = req.session.auth;
    if(auth){ // đã login rồi
        return res.redirect("/");
    }
    next();
}

exports.logged = (req,res,next)=>{
    const auth = req.session.auth;
    if(auth){
        return next();
    }
    res.redirect("/auth/login");
}
