const express = require("express");
const router = express.Router();
const serviceController = require(`./../../controllers/Services/parlorController`);
const baseController = require("./../../controllers/Users/baseController");
const uploadController = require(`./../../controllers/Services/uploadController`);

router.route("/stats").get(serviceController.getServiceStats);
router
  .route("/")
  .post(
    baseController.protect,
    baseController.restrictTo("vendor"),
    uploadController.upload.single("imageCover"),
    serviceController.createService
  )
  .get(serviceController.getService);

router.route("/:id").get(serviceController.getSingleService);
module.exports = router;
