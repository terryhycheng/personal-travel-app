const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

let data_list = [];

const fetchdata = async (input) => {
  //Add unique id to data object
  let data = { ...input, id: uuidv4(), createdOn: new Date() };

  //fetching Weatherbit APIs
  data.weather = await fetchWeather(data);

  //fetching Pixabay APIs
  data.imageURL = await fetchPhoto(data);

  //Pass organised data to local storage
  Client.setStorage(data);
};

const fetchWeather = async (data) => {
  try {
    const res = await axios.post(`http://localhost:8000/weather`, {
      body: {
        lat: data.geo.lat,
        lng: data.geo.lng,
        fromToday: data.date.fromToday,
      },
    });
    let temp_data = {};
    const order = data.date.fromToday <= 7 ? 0 : res.data.data.length - 1;
    temp_data = res.data.data[order].weather;
    temp_data.temp = res.data.data[order].temp;
    temp_data.low_temp = res.data.data[order].low_temp || null;
    temp_data.max_temp = res.data.data[order].max_temp || null;
    return temp_data;
  } catch (error) {
    console.error(error);
  }
};

const fetchPhoto = async (data) => {
  try {
    const res = await axios.post(`http://localhost:8000/photos`, {
      body: { keyword: data.city.toLowerCase().replace(/ /g, "+") },
    });
    if (res.data.hits.length > 0) {
      const RanNum = Math.ceil(Math.random() * 3);
      return res.data.hits[RanNum].largeImageURL;
    } else {
      console.log("Nothing return from Pixabay");
    }
  } catch (error) {
    console.error(error);
  }
};

export { data_list, fetchdata };
