const express = require("express");

const router = express.Router();

const adminDashboardController = require("../../controllers/Dashboards/adminDashboardController");
const baseController = require("../../controllers/Users/baseController");

//Vendors
router
  .route("/vendors")
  .get(
    baseController.protect,
    baseController.restrictTo("admin"),
    adminDashboardController.getAllVendors
  );

router
  .route("/vendors/:id")
  .get(
    baseController.protect,
    baseController.restrictTo("admin"),
    adminDashboardController.getSingleVendor
  )
  .delete(
    baseController.protect,
    baseController.restrictTo("admin"),
    adminDashboardController.deleteSingleVendor
  );

//Users
router
  .route("/users")
  .get(
    baseController.protect,
    baseController.restrictTo("admin"),
    adminDashboardController.getAllUsers
  );

router
  .route("/users/:id")
  .get(
    baseController.protect,
    baseController.restrictTo("admin"),
    adminDashboardController.getSingleUser
  )
  .delete(
    baseController.protect,
    baseController.restrictTo("admin"),
    adminDashboardController.deleteSingleUser
  );

//Services
router
  .route("/services")
  .get(
    baseController.protect,
    baseController.restrictTo("admin"),
    adminDashboardController.getAllServices
  );

router
  .route("/services/:id")
  .get(
    baseController.protect,
    baseController.restrictTo("admin"),
    adminDashboardController.getSingleService
  )
  .delete(
    baseController.protect,
    baseController.restrictTo("admin"),
    adminDashboardController.deleteSingleService
  );

router.route("/totaldata").get(adminDashboardController.totalData);
module.exports = router;
