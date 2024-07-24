const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const User = require(`./../../models/Users/userSchema.js`);

//Sign Up Functionality User Creation
exports.signup = async function (req, resp, next) {
  try {
    const { name, email, password, passwordConfirm, photo, role } = req.body;

    const newUser = await User.create({
      name,
      gender,
      email,
      password,
      passwordConfirm,
      photo,
      role,
    });
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "90d",
      }
    );
    resp.cookie("jwt", token, {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      secure: true,
      httpOnly: true,
      sameSite: "none",
    });
    resp.status(201).json({
      token,
      message: "Success",
      data: newUser,
    });
  } catch (err) {
    console.log(err);
    resp.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

// Login Functionality
exports.login = async function (req, resp) {
  //Check user enter email and password
  if (!req.body.email || !req.body.password) {
    return resp.status(401).json({
      status: "failed",
      message: "Please Enter you Email and Password",
    });
  }
  //check user exist or not
  const user = await User.findOne({ email: req.body.email }).select(
    "password role"
  );
  if (!user) {
    return resp.status(401).json({
      status: "failed",
      message: "User not exist",
    });
  }
  console.log(user.role);
  //Password is correct or not --Remember Password saved on databse is in hashed form
  if (await bcrypt.compare(req.body.password, user.password)) {
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
    resp.cookie("jwt", token, {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
    resp.status(200).json({
      token,
      status: "success",
      message: "User successfully Loged In",
      data: user,
    });
  } else {
    return resp.status(401).json({
      status: "failed",
      message: "Incorrect password",
    });
  }
};

//Forget Password

exports.forgetPassword = async function (req, resp, next) {
  try {
    const { email } = req.body;
    //User Enter email or not
    if (!email) throw new Error("Please Enter Email Address");
    //User Still Exist OR NOT(Deleted)
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not Exist");
    //Genrate Random token (this token is send to user via email)
    const token = crypto.randomUUID();
    //saved using current document not using Model
    user.resetToken = token;
    //Token Expired After 10 minutes
    user.tokenExpiry = Date.now() + 10 * 60 * 1000;
    await user.save({
      validateBeforeSave: false,
    });
    console.log("Mail bhejne laga hon...");
    //Send Token to Email
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,

      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const sendEmailOptions = {
      from: process.env.EMAIL_FROM,
      to: user.email,
      subject: "WedBliss Reset Password (Token Expired After 10 minutes)",
      text: `localhost:3000/reset-password/${token}`,
    };

    // await transport.sendMail(sendEmailOptions);
    resp.status(200).json({
      status: "success",
      message: "Check your email ",
      data: `localhost:3000/reset-password/${token}`,
    });
  } catch (err) {
    console.log(err);
    resp.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};

//Reset Password
exports.resetPassword = async function (req, resp) {
  try {
    const { token } = req.params;
    const user = await User.findOne({ resetToken: token });
    if (!user) throw new Error("Invalid Token");
    if (user.tokenExpiry < Date.now()) {
      throw new Error("Token has been Expired");
    }

    if (!req.body.password || !req.body.passwordConfirm) {
      throw new Error("Please Enter Password and Confirm Password");
    }
    if (req.body.password !== req.body.passwordConfirm) {
      throw new Error("Password don't match ");
    }
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save({
      validateBeforeSave: false,
    });
    const jwtToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "90d",
      }
    );
    resp.cookie("jwt", jwtToken, {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      // secure: true,
      httpOnly: true,
    });
    return resp.status(200).json({
      token: jwtToken,
      status: "Success",
      message: "Password Reset Successfully",
    });
  } catch (err) {
    console.log(err);
    resp.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
