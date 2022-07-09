const axios = require("axios");

const checker = async ({
  country_input,
  city_input,
  departing_date_input,
  return_date_input,
}) => {
  //1. check if all fields are filled, otherwise display warning
  if (
    country_input &&
    city_input &&
    departing_date_input &&
    return_date_input
  ) {
    //2. Check if city input is correct, otherwise display warning
    const cityName = await checkCity(city_input, country_input);
    //3. Check if return date > departing date, otherwise display warning
    const length = checkDate(departing_date_input, return_date_input);
    //4. Pass varified data to app.js
    if (cityName && length) {
      const data = {
        country: country_input,
        city: cityName.placeName,
        geo: {
          lat: cityName.lat,
          lng: cityName.lng,
        },
        date: {
          departing_date: departing_date_input,
          return_date: return_date_input,
          trip_length: length.diffDays,
          fromToday: length.diffToday,
        },
      };
      Client.fetchdata(data);
    }
  } else {
    required_warning.classList.remove("hide");
  }
};

const checkCity = async (city, country) => {
  try {
    const data = await axios.post(
      `http://localhost:8000/geonames?city=${city
        .toLowerCase()
        .replace(/ /g, "+")}&country=${country}`
    );
    return data.data.postalCodes[0].placeName.toLowerCase() ===
      city.toLowerCase()
      ? data.data.postalCodes[0]
      : cityname_warning.classList.remove("hide");
  } catch (error) {
    console.error(error);
  }
};

const checkDate = (d_date, r_date) => {
  const d = new Date(d_date);
  const r = new Date(r_date);
  const today = new Date();
  const diffDays = Math.ceil((r - d) / (1000 * 60 * 60 * 24));
  const diffToday = Math.ceil((d - today) / (1000 * 60 * 60 * 24));
  return diffDays > 0
    ? { diffDays: diffDays, diffToday: diffToday }
    : date_warning.classList.remove("hide");
};

export { checker, checkDate };
