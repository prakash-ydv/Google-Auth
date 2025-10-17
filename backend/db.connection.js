const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connected...");
  } catch (err) {
    console.log("DB Not connected...", err);
  }
};
module.exports = connectToDB;
