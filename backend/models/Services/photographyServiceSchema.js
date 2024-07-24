const mongoose = require("mongoose");
const baseServiceSchema = require("./baseServiceSchema");

const photographyServiceSchema = new mongoose.Schema({
  photographerGender: {
    type: String,
  },
});

photographyServiceSchema.add(baseServiceSchema);

const Photographer = mongoose.model("Photographer", photographyServiceSchema);

module.exports = Photographer;
