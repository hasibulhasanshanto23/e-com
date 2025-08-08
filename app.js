const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Database/db");
const AuthRouter = require("./Routes/AuthRouter");
const ProfileRouter = require("./Routes/ProfileRouter");

const app = express();

require("dotenv").config();

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", AuthRouter);
app.use("/profile", ProfileRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`✅ Server is Running on ${PORT}`);
});
