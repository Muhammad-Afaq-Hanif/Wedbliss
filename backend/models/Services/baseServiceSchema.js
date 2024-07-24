const mongoose = require("mongoose");
const slugify = require("slugify");
const baseServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Marriage Hall Name"],
    unique: [true, "Please Enter unique Marriage Hall name"],
  },
  slug: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Please Enter a Price"],
  },
  ratingAverage: {
    type: String,
  },
  ratingQuantity: {
    type: String,
    default: 0,
  },
  location: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      required: true,
    },
    address: String,
    description: String,
  },
  city: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  available: {
    type: Boolean,
  },
  discountedPrice: {
    type: Number,
    validate: {
      validator: function (value) {
        if (value > this.price) {
          return false;
        } else {
          return true;
        }
      },
      message: "Discounted Price must be less than Actual Price",
    },
  },
  summary: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
  },
  images: {
    type: [String],
  },
  vendor: {
    type: mongoose.Schema.ObjectId,
    ref: "Vendor",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
baseServiceSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "marriageHall",
  localField: "_id",
});

baseServiceSchema.index({ location: "2dsphere" });
baseServiceSchema.pre("save", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
  });
  next();
});
baseServiceSchema.pre("find", function (next) {
  this.select("-__v");
  next();
});

module.exports = baseServiceSchema;
