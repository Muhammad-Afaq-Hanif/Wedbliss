const mongoose = require("mongoose");
const baseServiceSchema = require("./baseServiceSchema");

const cateringServiceSchema = new mongoose.Schema({
  plates: {
    type: Boolean,
  },
  seating: {
    type: Boolean,
  },
  waiters: {
    type: Boolean,
  },
  packages: [
    {
      name: String,
      price: String,
      dishes: [String],
      drinks: [String],
      sutiableFor: Number,
    },
  ],
});

cateringServiceSchema.add(baseServiceSchema);
const Catering = mongoose.model("Catering", cateringServiceSchema);
module.exports = Catering;
