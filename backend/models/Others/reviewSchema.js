const mongoose = require("mongoose");
const MarriageHall = require("./../Services/marriageHallSchema");
const reviewsSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review cannot be rating"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    //is review ka taluq kis marriage hall sey hai
    marriageHall: {
      type: mongoose.Schema.ObjectId,
      ref: "MarriageHall",
      required: [true, "Review must belong to Marraige Hall Service"],
    },
    //is review ko likha  kis ney hai
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "A review must be belong to User"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
reviewsSchema.post("save", async function () {
  // this points to current review
  const marriageHall = await MarriageHall.findById(this.marriageHall);

  if (marriageHall) {
    const reviews = await Review.find({ marriageHall: marriageHall._id });
    const ratingQuantity = reviews.length;
    let totalRatings = 0;
    for (let i = 0; i < reviews.length; i++) {
      totalRatings += reviews[i].rating;
    }
    const ratingAverage = (totalRatings / ratingQuantity || 0).toFixed(2);

    marriageHall.ratingQuantity = ratingQuantity;
    marriageHall.ratingAverage = ratingAverage;
    await marriageHall.save();
  }
});
const Review = mongoose.model("Review", reviewsSchema);

module.exports = Review;
