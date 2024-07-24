const express = require("express");
const router = express.Router();

const adminController = require("../../controllers/Users/adminController");

router.route("/login").post(adminController.login);
router.route("/signup").post(adminController.signup);
router.route("/forget-password").post(adminController.forgetPassword);
router.route("/reset-password/:token").patch(adminController.resetPassword);

module.exports = router;
