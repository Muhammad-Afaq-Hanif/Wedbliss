const express = require("express");
const router = express.Router();

const userController = require("../../controllers/Users/userController");

router.route("/login").post(userController.login);
router.route("/signup").post(userController.signup);
router.route("/forget-password").post(userController.forgetPassword);
router.route("/reset-password/:token").patch(userController.resetPassword);

module.exports = router;
