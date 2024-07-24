const mongoose = require("mongoose");
const baseUserSchema = require("./baseUserSchema");

const adminSchema = new mongoose.Schema({
  vendors: {
    type: [String],
  },
  role: {
    type: String,
    enum: {
      values: ["admin"],
      message: "Invalid User Type",
    },
    default: "admin",
  },
});

adminSchema.add(baseUserSchema);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
