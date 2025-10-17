const express = require("express");
const connectToDB = require("./db.connection");
const { googleLogin } = require("./controllers/user.controller");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());

connectToDB();

app.post("/auth/login", googleLogin);

app.get("/", (req, res) => {
  res.json({
    status: "running",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
