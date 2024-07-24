const mongoose = require("mongoose");
const baseUserSchema = require("./baseUserSchema");

const userSchema = new mongoose.Schema({
  cart: {
    type: [String],
  },
  orders: {
    type: [String],
  },
  paymentMethods: {
    type: "String",
    enum: ["JazzCash", "EasyPaisa", "CashOnDelivery"],
    default: "CashOnDelivery",
  },
  wishlist: {
    type: [String],
  },
  reviewsWritten: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Reviews",
    },
  ],
  role: {
    type: String,
    enum: {
      values: ["user"],
      message: "Invalid User Type",
    },
    default: "user",
  },
});

userSchema.add(baseUserSchema);

const User = mongoose.model("User", userSchema);

module.exports = User;
