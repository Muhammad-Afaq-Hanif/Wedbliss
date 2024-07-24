const mongoose = require("mongoose");
const baseUserSchema = require("./baseUserSchema");

const vendorSchema = new mongoose.Schema({
  lineOfBusiness: {
    type: String,
    required: [true, "Please provide your line of business"],
  },

  brandName: {
    type: String,
    required: [true, "Please provide the brand name"],
  },
  websiteLink: {
    type: String,
  },
  role: {
    type: String,
    enum: {
      values: ["vendor"],
      message: "Invalid User Type",
    },
    default: "vendor",
  },
});

vendorSchema.add(baseUserSchema);

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
