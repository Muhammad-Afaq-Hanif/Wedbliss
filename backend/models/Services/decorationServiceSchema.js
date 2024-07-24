const mongoose = require("mongoose");
const baseServiceSchema = require("./baseServiceSchema");

const decorationSchema = new mongoose.Schema({});

decorationSchema.add(baseServiceSchema);
const Decoration = mongoose.model("Decoration", decorationSchema);
module.exports = Decoration;
