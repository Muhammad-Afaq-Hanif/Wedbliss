const express = require("express");

const router = express.Router();

const vendorDashboardController = require("../../controllers/Dashboards/vendorDashboardController");
const baseController = require("../../controllers/Users/baseController");
const uploadController = require("../../controllers/Services/uploadController");

//Add New Service
router
  .route("/addnewservice/:id")
  .post(
    baseController.protect,
    baseController.restrictTo("vendor"),
    uploadController.upload.single("imageCover"),
    vendorDashboardController.createService
  );

//List All services of that Vendor

router
  .route("/services")
  .get(
    baseController.protect,
    baseController.restrictTo("vendor"),
    vendorDashboardController.getAllServices
  );
router
  .route("/services/:id")
  .get(
    baseController.protect,
    baseController.restrictTo("vendor"),
    vendorDashboardController.getSingleService
  )
  .patch(
    baseController.protect,
    baseController.restrictTo("vendor"),
    vendorDashboardController.updateService
  )
  .delete(
    baseController.protect,
    baseController.restrictTo("vendor"),
    vendorDashboardController.deleteSingleService
  );

router
  .route("/totaldata")
  .get(
    baseController.protect,
    baseController.restrictTo("vendor"),
    vendorDashboardController.totalData
  );
module.exports = router;
