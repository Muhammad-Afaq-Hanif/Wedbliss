const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const baseUserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please Enter your Email"],
    unique: [true, "This Email is Already in Use"],
    validate: {
      validator: validator.isEmail,
      message: "Please Enter an Valid Email",
    },
    lowercase: true, //It transform email to lower case
  },
  photo: {
    type: String,
  },
  resetToken: {
    type: String,
  },

  tokenExpiry: {
    type: Date,
  },
  password: {
    type: String,
    required: [true, "Please Enter a Password"],
    minLength: 8,
    select: false,
  },
  contactNumber: {
    type: String,
  },
  passwordChanged: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please Enter a Confirm Password"],
    // This only works on Save/create
    validate: {
      validator: function (value) {
        return this.password === value;
      },
      message: "Password and Confirm Password Don't match",
    },
  },
});

baseUserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    this.resetToken = undefined;
    this.tokenExpiry = undefined;
  }

  next();
});

module.exports = baseUserSchema;
