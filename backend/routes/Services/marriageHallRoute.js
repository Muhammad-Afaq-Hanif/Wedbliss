//Imports
const express = require("express");
const router = express.Router({ mergeParams: true });
const marriageHallController = require(`./../../controllers/Services/marriageHallController`);
const uploadController = require(`./../../controllers/Services/uploadController`);
const baseController = require("./../../controllers/Users/baseController");
const reviewRouter = require("./../../routes/Others/reviewRoute");

router.use("/:serviceId/review", reviewRouter);

router
  .route("/marriagehalls-within/:distance/center/:latlng/unit/:unit")
  .get(marriageHallController.getMarriageHallsWithin);
//Import Marriage Halls From JSON FIle
router
  .route("/createmarriagehallfromjson")
  .post(
    baseController.protect,
    baseController.restrictTo("admin"),
    marriageHallController.createAllMarriageHallsFromJson
  );

router.route("/stats").get(marriageHallController.getMarriageHallStats);

router
  .route("/")
  .post(
    baseController.protect,
    baseController.restrictTo("vendor"),
    uploadController.upload.single("imageCover"),
    marriageHallController.createMarriageHall
  )
  .get(marriageHallController.getMarriageHall);

router.route("/:id").get(marriageHallController.getSingleService);
module.exports = router;
