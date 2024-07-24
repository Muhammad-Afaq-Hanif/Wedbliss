//Import Packages
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { promisify } = require("util");

//Import Models
const User = require("./../../models/Users/userSchema");
const Vendor = require("./../../models/Users/vendorSchema");
const Admin = require("./../../models/Users/adminSchema");

//User Logged In OR NOT..
exports.protect = async function (req, resp, next) {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      throw new Error("Authentication failed: JWT not found");
    }

    console.log(token);
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    console.log(decoded.role);
    let userModel;
    if (decoded.role === "admin") {
      userModel = Admin;
    } else if (decoded.role === "vendor") {
      userModel = Vendor;
    } else if (decoded.role === "user") {
      userModel = User;
    }
    const user = await userModel.findById(decoded.id);
    if (!user) {
      throw new Error("User not Still Exist Deleted");
    }
    if (!user.passwordChanged) {
      req.user = user;
      return next();
    }
    const tokenIssueDate = decoded.iat;
    let passwordChangedDate = user.passwordChanged;
    passwordChangedDate = new Date(passwordChangedDate).getTime();
    passwordChangedDate = parseInt(passwordChangedDate / 1000);
    console.log(
      `Token Issue Date ${tokenIssueDate} and Password Changed Date ${passwordChangedDate}`
    );
    if (tokenIssueDate < passwordChangedDate) {
      throw new Error(
        "Password Changed After Issue of Token kindly Login Again with updated version of password"
      );
    }

    req.user = user;

    next();
  } catch (err) {
    console.log(err);
    return resp.status(401).json({
      status: "Failed",
      message: err,
    });
  }
};

// User Allow to access certain Functionality/Route or Not??
exports.restrictTo = function (...roles) {
  return (req, resp, next) => {
    const { user } = req;
    console.log("user is ", user.role);
    let allow = false;
    roles.forEach((el) => {
      if (user.role === el) {
        allow = true;
      }
    });
    if (allow === false) {
      return resp.status(401).json({
        status: "failed",
        message: "You are not allowed to perform this Action",
      });
    }
    next();
  };
};

exports.getMe = async function (req, resp) {
  try {
    const currentUser = req.user;
    let userModel;
    if (currentUser.role === "admin") {
      userModel = Admin;
    } else if (currentUser.role === "vendor") {
      userModel = Vendor;
    } else {
      userModel = User;
    }
    const data = await userModel
      .findById(currentUser._id)
      .select("-password -__v");
    resp.status(200).json({
      status: "Success",
      data,
    });
  } catch (err) {
    console.log("🧨 ", err);
    resp.status(400).json({
      status: "Failed",
      err,
    });
  }
};

exports.changeMyPassword = async function (req, resp) {
  try {
    const currentUser = req.user;
    let userModel;
    if (currentUser.role === "admin") {
      userModel = Admin;
    } else if (currentUser.role === "vendor") {
      userModel = Vendor;
    } else {
      userModel = User;
    }
    const user = await userModel.findById(currentUser._id).select("+password");
    if (req.body.password !== req.body.passwordConfirm) {
      throw new Error("Password Don't Match");
    }
    if (await bcrypt.compare(req.body.oldPassword, user.password)) {
      user.password = req.body.password;
      await user.save({
        validateBeforeSave: false,
      });
      resp.status(200).json({
        status: "success",
        mesage: "Password Changed Successfully",
      });
    } else {
      throw new Error("Incorrect Password");
    }
  } catch (err) {
    console.log("🧨 ", err);
    resp.status(400).json({
      status: "Failed",
      err,
    });
  }
};
exports.changeMyData = async function (req, resp) {
  try {
    const currentUser = req.user;
    let userModel;
    if (currentUser.role === "admin") {
      userModel = Admin;
    } else if (currentUser.role === "vendor") {
      userModel = Vendor;
    } else {
      userModel = User;
    }

    const { name, email, username, gender, contactNumber } = req.body;

    const user = await userModel.findByIdAndUpdate(
      currentUser._id,
      { name, email, username, gender, contactNumber },
      { new: true, runValidators: true }
    );

    resp.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    console.log("🧨 ", err);
    resp.status(400).json({
      status: "Failed",
      err,
    });
  }
};
exports.changeProfilePhoto = async function (req, resp) {
  try {
    const currentUser = req.user;
    let userModel;
    if (currentUser.role === "admin") {
      userModel = Admin;
    } else if (currentUser.role === "vendor") {
      userModel = Vendor;
    } else {
      userModel = User;
    }
    const user = await userModel.findById(currentUser._id);

    let photo;
    if (req.file) {
      photo = req.file.filename;
    }
    user.photo = photo;
    await user.save({
      validateBeforeSave: false,
    });
    resp.status(200).json({
      status: "success",
      mesage: "Photo Changed Successfully",
    });
  } catch (err) {
    console.log("🧨 ", err);
    resp.status(400).json({
      status: "Failed",
      err,
    });
  }
};
exports.deleteMe = async function (req, resp) {
  try {
    const currentUser = req.user;
    let userModel;
    if (currentUser.role === "admin") {
      userModel = Admin;
    } else if (currentUser.role === "vendor") {
      userModel = Vendor;
    } else {
      userModel = User;
    }
    const user = await userModel.findById(currentUser._id).select("+password");
    if (await bcrypt.compare(req.body.oldPassword, user.password)) {
      await userModel.findByIdAndDelete(user._id);
      //bad mai status false karna asal ami delete na karna
      resp.cookie("jwt", "", {
        expires: new Date(0), // Set the expiration date to a past time
        httpOnly: true,
      });
      resp.status(404).json({
        status: "success",
        mesage: "User Deleted Successfully",
      });
    } else {
      throw new Error("Incorrect Password");
    }
  } catch (err) {
    console.log("🧨 ", err);
    resp.status(400).json({
      status: "Failed",
      err,
    });
  }
};
exports.loggedOut = async function (req, resp) {
  resp.cookie("jwt", "", {
    expires: new Date(0), // Set the expiration date to a past time
    secure: true,
    httpOnly: true,
    sameSite: "none",
  });
  resp.status(200).json({
    status: "success",
    mesage: "Logged Out successfully",
  });
};

//Vendor Authenticator
exports.vendorAuthenticator = async function (req, resp) {
  resp.status(200).json("vendor");
};
