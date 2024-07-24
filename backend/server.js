//dot env file configuration
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });
//express app import
const app = require(`${__dirname}/app`);
const mongoose = require("mongoose");
//starting server
app.listen(process.env.PORT, () => {
  console.log(`Server started on Port ${process.env.PORT}`);
});

//starting mongoose
mongoose
  .connect(process.env.DATABASE_CONNECTION)
  .then(() => {
    console.log("MongoDB connected Successfully");
  })
  .catch(() => {
    console.log("MongoDB not connected");
  });
