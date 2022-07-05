const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

let data_list = [];

const fetchdata = (input) => {
  //A placeholder for data object
  let data = {};

  //fetching API key
  //fetching Geonames APIs
  //fetching Weatherbit APIs
  //fetching Pixabay APIs
  console.log("Data fetched!");

  /**
   * Set properties to object placeholder
   * which includes:
   * 1. Postal Code
   * 2. Country
   * 3. Start date
   * 4. End date
   * 5. Trip duration
   * 6. Unique ID
   * 7. Weather Info
   * 8. Photo
   * */

  data.id = uuidv4();
  data.name = input;

  //Pass organised data to local storage
  Client.setStorage(data);
};

export { data_list, fetchdata };
