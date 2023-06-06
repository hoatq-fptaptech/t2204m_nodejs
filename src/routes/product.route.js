const MODULE="PRODUCT";

const express = require("express");
const router = express.Router();
const controller = require("./../controllers/product.controller");
const middleware = require("./../middlewares/auth.middleware");

// nếu muốn toàn bộ route đều bị lọc qua middleware 
router.use(middleware.logged);
router.use((req,res,next)=>{
    const auth = req.session.auth;
    if(auth.permissions.include(MODULE)){
        return next();
    }
    res.status(404).send("Error");
})

router.get("/",controller.get);
router.get("/create",controller.create);
router.post("/create",controller.save);

module.exports = router;