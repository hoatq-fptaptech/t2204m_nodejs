const MODULE="PRODUCT";

const express = require("express");
const router = express.Router();
const controller = require("./../controllers/product.controller");
const middleware = require("./../middlewares/auth.middleware");

// nếu muốn toàn bộ route đều bị lọc qua middleware 
// router.use(middleware.logged);
// router.use((req,res,next)=>{
//     const auth = req.session.auth;
//     if(auth.permissions.include(MODULE)){
//         return next();
//     }
//     res.status(404).send("Error");
// })

// upload file
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/uploads/products");
    },
    filename: function(req,file,cb){
       // console.log(file);
        cb(null,Date.now()+"-"+file.originalname);
    }
});
const upload = multer({storage:storage});

router.get("/",controller.get);
router.get("/create",controller.create);
router.post("/create",upload.single("thumbnail"),controller.save);

module.exports = router;