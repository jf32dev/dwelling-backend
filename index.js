const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const corsOpts = {
    origin: '*'
  };
app.use(cors(corsOpts));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Balenci-checker-api application." });
});

const { check } = require("./controllers/checkController");

app.post("/check", check);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} .`);
});
