//Packages
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const publicPath = path.join(__dirname, "public");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const morgan = require("morgan");

//Routers
//-Services
const marriageHallRouter = require(`${__dirname}/routes/Services/marriageHallRoute`);
const photographyRouter = require(`${__dirname}/routes/Services/photographerRoute`);
const parlorRouter = require(`${__dirname}/routes/Services/parlorRoute`);
const decorationRouter = require(`${__dirname}/routes/Services/decorationRoute`);
const cateringRouter = require(`${__dirname}/routes/Services/cateringRoute`);
const invitationRouter = require(`${__dirname}/routes/Services/invitationRoute`);

//-Users
//--Base Router
const baseRouter = require(`${__dirname}/routes/Users/baseRoute`);

const userRouter = require(`${__dirname}/routes/Users/userRoute`);
const adminRouter = require(`${__dirname}/routes/Users/adminRoute`);
const vendorRouter = require(`${__dirname}/routes/Users/vendorRoute`);

//Dashboards

const userDashboard = require(`${__dirname}/routes/Dashboards/userDashboardRoute`);
const adminDashboard = require(`${__dirname}/routes/Dashboards/adminDashboardRoute`);
const vendorDashboard = require(`${__dirname}/routes/Dashboards/vendorDashboardRoute`);

//
//Middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Allow cookies and authorization headers
  })
);

app.use(morgan("dev"));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(publicPath));

//routes
//-me (Base URL's)
app.use(`/api/v1/me`, baseRouter);
//-Services
app.use(`/api/v1/marriage-hall`, marriageHallRouter);
app.use(`/api/v1/photography`, photographyRouter);
app.use(`/api/v1/parlor`, parlorRouter);
app.use(`/api/v1/decoration`, decorationRouter);
app.use(`/api/v1/catering`, cateringRouter);
app.use(`/api/v1/invitation`, invitationRouter);

//-Users
app.use(`/api/v1/users`, userRouter);
//-Admin
app.use(`/api/v1/admin`, adminRouter);
//-Vendor
app.use(`/api/v1/vendor`, vendorRouter);

//Dashboards
//-Users
app.use(`/api/v1/dashboard/users`, userDashboard);
//-Admin
app.use(`/api/v1/dashboard/admin`, adminDashboard);
//-Vendor
app.use(`/api/v1/dashboard/vendor`, vendorDashboard);

module.exports = app;
