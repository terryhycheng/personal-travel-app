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
app.use(express.static("dist"));

dotenv.config();

//POST Routes
app.post("/geonames", async (req, res) => {
  try {
    const data = await axios.get(
      `http://api.geonames.org/postalCodeSearchJSON?placename=${req.query.city}&country=${req.query.country}&maxRows=3&username=${process.env.GEONAMES_NAME}`
    );
    res.send(data.data);
  } catch (error) {
    console.error(error);
  }
});

app.post("/weather", async (req, res) => {
  try {
    const { lat, lng, fromToday } = req.body.body;
    const data = await axios.get(
      `https://api.weatherbit.io/v2.0/${
        fromToday <= 7 ? "current" : "forecast"
      }/daily?&lat=${lat}&lon=${lng}&key=${process.env.WEATHER_API_KEY}`
    );
    res.send(data.data);
  } catch (error) {
    console.error(error);
  }
});

app.post("/photos", async (req, res) => {
  try {
    const { keyword } = req.body.body;
    const data = await axios.get(
      `https://pixabay.com/api/?key=${process.env.PHOTO_API_KEY}&q=${keyword}s&image_type=photo`
    );
    res.send(data.data);
  } catch (error) {
    console.error(error);
  }
});

//Console log while server starts to run
app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
