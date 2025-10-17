const { oauth2client } = require("../config/google.config");
const axios = require("axios");
require("dotenv").config();
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const googleLogin = async (req, res) => {
  const { code } = req.body;
  const googleRes = await oauth2client.getToken(code);
  oauth2client.setCredentials(googleRes.tokens);

  const userRes = await axios.get(
    "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
    {
      headers: {
        Authorization: `Bearer ${googleRes.tokens.access_token}`,
      },
    }
  );

  const { email, name, picture } = userRes.data;

  let user = await userModel.findOne({ email });

  if (!user) {
    user = await userModel.create({
      email,
      name,
      profileUrl: picture,
    });
  }

  const token = jwt.sign({ email }, JWT_SECRET_KEY);
  return res.status(200).json({
    status: "success",
    user,
    token,
  });
};

module.exports = {
  googleLogin,
};
