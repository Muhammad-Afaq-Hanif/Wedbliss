const express = require("express");

const router = express.Router({ mergeParams: true });

const reviewController = require("./../../controllers//Others/reviewController");
const baseController = require("./../../controllers/Users/baseController");

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(
    baseController.protect,
    baseController.restrictTo("user"),
    reviewController.createReview
  );

router.route("/:id").get(reviewController.getSingleReview);

module.exports = router;
