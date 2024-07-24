const express = require("express");
const router = express.Router();
const invitationController = require(`../../controllers/Services/invitationController`);
const baseController = require("../../controllers/Users/baseController");
const uploadController = require(`../../controllers/Services/uploadController`);

router.route("/stats").get(invitationController.getServiceStats);
router
  .route("/")
  .post(
    baseController.protect,
    baseController.restrictTo("vendor"),
    uploadController.upload.single("imageCover"),
    invitationController.createService
  )
  .get(invitationController.getService);

router.route("/:id").get(invitationController.getSingleService);
module.exports = router;
