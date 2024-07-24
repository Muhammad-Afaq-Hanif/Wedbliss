const MarriageHall = require("./../../models/Services/marriageHallSchema");
const Review = require("./../../models/Others/reviewSchema");
// Creation of Review
exports.createReview = async function (req, resp) {
  try {
    const { review, rating } = req.body;
    let marriageHall = req.params.serviceId;
    console.log(marriageHall);
    const currentMarraigeHall = await MarriageHall.findOne({
      slug: marriageHall,
    }).populate({
      path: "reviews",
    });

    const user = req.user._id;
    marriageHall = currentMarraigeHall._id;
    //finding user
    currentMarraigeHall.reviews.forEach((el) => {
      if (el.user == user.toString()) {
        throw new Error("You already posted an review");
      }
    });
    const data = await Review.create({ review, rating, marriageHall, user });
    resp.status(201).json({
      message: "Success",
      data,
    });
  } catch (err) {
    console.log(err);
    resp.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};

// Getting Single Review
exports.getSingleReview = async function (req, resp) {
  try {
    const param = req.params.id;
    const data = await Review.findById(param)
      .populate({
        path: "marriageHall",
        select: "name",
      })
      .populate({
        path: "user",
        select: "name photo",
      });
    resp.status(200).json({
      status: "Success",
      data,
    });
  } catch (err) {
    console.log(err);
    resp.status(400).json({
      status: "Failed",
    });
  }
};

// Getting All Reviews
exports.getAllReviews = async function (req, resp) {
  try {
    const marriageHall = req.params.serviceId;
    const currentMarraigeHall = await MarriageHall.findOne({
      slug: marriageHall,
    });

    const data = await Review.find({
      marriageHall: currentMarraigeHall._id,
    }).populate({
      path: "user",
      select: "name photo",
    });
    resp.status(200).json({
      status: "Success",
      result: data.length,
      data,
    });
  } catch (err) {
    console.log(err);
    resp.status(400).json({
      status: "Failed Ho gia",
    });
  }
};

// Deleting Review
// exports.deleteReview = async function(req, resp) {
//   const user=await Re
//   const param = req.params.id;
// };

//Updating Review
