const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const axios = require("axios");

//set up server
const port = 8000;
const app = express();

//middlewares
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

//GET Route
app.get("/todos", async (req, res) => {
  try {
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    res.send(data.data);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api", async (req, res) => {
  try {
    res.status(200).send({ key: process.env.API_KEY });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

//Console log while server starts to run
app.listen(port, () => console.log(`Listening on port ${port}`));
