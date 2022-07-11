import app from "../../../server/server";
const request = require("supertest");

describe("Test Express server", () => {
  test("Weatherbit.io API should response the POST method", async () => {
    const bodyOption = { lat: 10, lng: 20, fromToday: 3 };

    const response = await request(app)
      .post("/weather")
      .send({ body: bodyOption });
    await expect(response.statusCode).toEqual(200);
  });

  test("Geonames API should response the POST method", async () => {
    const city = "New York";
    const country = "US";

    const response = await request(app)
      .post("/geonames")
      .query({ city: city.toLowerCase().replace(/ /g, "+"), country: country });
    await expect(response.statusCode).toEqual(200);
  });

  test("Pixabay API should response the POST method", async () => {
    const bodyOption = { keyword: "new+york" };

    const response = await request(app)
      .post("/photos")
      .send({ body: bodyOption });
    await expect(response.statusCode).toEqual(200);
  });
});
