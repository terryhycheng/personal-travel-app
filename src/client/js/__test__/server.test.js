const axios = require("axios");

describe("Test Express server", () => {
  test("Weatherbit.io API should response the POST method", async () => {
    const bodyOption = { lat: 10, lng: 20, fromToday: 3 };

    const res = await axios.post("http://localhost:8000/weather", {
      body: bodyOption,
    });
    expect(res.status).toBe(200);
  });

  test("Geonames API should response the POST method", async () => {
    const city = "New York";
    const country = "US";

    const res = await axios.post(
      `http://localhost:8000/geonames?city=${city
        .toLowerCase()
        .replace(/ /g, "+")}&country=${country}`
    );
    expect(res.status).toBe(200);
  });

  test("Pixabay API should response the POST method", async () => {
    const bodyOption = { keyword: "new+york" };

    const res = await axios.post("http://localhost:8000/photos", {
      body: bodyOption,
    });
    expect(res.status).toBe(200);
  });
});
