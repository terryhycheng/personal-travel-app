const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

//set up server
const port = 8000;
const app = express();

//middlewares
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

//GET Route
app.get("/", async (req, res) => {
  try {
    res.status(200).send({ message: "Hello world!" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

//Console log while server starts to run
app.listen(port, () => console.log(`Listening on port ${port}`));
