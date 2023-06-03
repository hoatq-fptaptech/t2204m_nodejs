const express = require("express");
const router = express.Router();

const controller = require("./../controllers/auth.controller");
router.get("/register",controller.register);
router.post("/register",controller.create_user);
router.post("/logout",controller.logout);

router.get("/forgot-password",controller.form_forgot);
router.post("/forgot-password",controller.forgot);

router.get("/reset-password",controller.form_reset);
router.post("/reset-password",controller.reset);

module.exports = router;