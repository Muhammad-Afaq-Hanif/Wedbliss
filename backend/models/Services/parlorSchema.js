const mongoose = require("mongoose");
const baseServiceSchema = require("./baseServiceSchema");

const parlorSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["male", "female"],
  },
});

parlorSchema.add(baseServiceSchema);
const Parlor = mongoose.model("Parlor", parlorSchema);
module.exports = Parlor;
