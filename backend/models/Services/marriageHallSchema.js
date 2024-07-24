const mongoose = require("mongoose");
const slugify = require("slugify");

const baseServiceSchema = require("./baseServiceSchema");

const marriageHallSchema = new mongoose.Schema(
  {
    capacity: {
      type: Number,
    },
    type: {
      type: String,
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

marriageHallSchema.add(baseServiceSchema);

const MarriageHall = mongoose.model("MarriageHall", marriageHallSchema);
module.exports = MarriageHall;
