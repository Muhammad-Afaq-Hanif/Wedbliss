const express = require("express");
const router = express.Router();

const baseController = require("./../../controllers/Users/baseController");
const vendorController = require("./../../controllers/Users/vendorController");

router.route("/login").post(vendorController.login);
router.route("/signup").post(vendorController.signup);
router.route("/forget-password").post(vendorController.forgetPassword);
router.route("/reset-password/:token").patch(vendorController.resetPassword);
module.exports = router;
