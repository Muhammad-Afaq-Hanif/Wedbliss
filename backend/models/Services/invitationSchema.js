const mongoose = require("mongoose");
const baseServiceSchema = require("./baseServiceSchema");

const invitationCardSchema = new mongoose.Schema({});

invitationCardSchema.add(baseServiceSchema);
const Invitation = mongoose.model("Invitation", invitationCardSchema);
module.exports = Invitation;
