const express = require("express");
const router = express.Router();
const controller = require("./../controllers/product.controller");
const middleware = require("./../middlewares/auth.middleware");

// nếu muốn toàn bộ route đều bị lọc qua middleware 
router.use(middleware.logged);

router.get("/",controller.get);
router.get("/create",controller.create);
router.post("/create",controller.save);

module.exports = router;