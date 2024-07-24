const express = require("express");
const router = express.Router();

const baseController = require("../../controllers/Users/baseController");
const uploadController = require("../../controllers/Services/uploadController");

//Password Updation
router
  .route("/update-password")
  .patch(baseController.protect, baseController.changeMyPassword);

//Change Photo
router
  .route("/update-photo")
  .patch(
    baseController.protect,
    uploadController.upload.single("photo"),
    baseController.changeProfilePhoto
  );
router
  .route("/update-me")
  .patch(baseController.protect, baseController.changeMyData);
//Get my Data
//Delete ME
router
  .route("/")
  .get(baseController.protect, baseController.getMe)
  .delete(baseController.protect, baseController.deleteMe);

//Vendor Authenticator
router
  .route("/vendor-authenticator")
  .get(
    baseController.protect,
    baseController.restrictTo("vendor"),
    baseController.vendorAuthenticator
  );
//Log Out
router.route("/log-out").get(baseController.protect, baseController.loggedOut);
module.exports = router;
