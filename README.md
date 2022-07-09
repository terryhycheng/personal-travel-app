# ✈️Personal Travel App

![Travel App Preview](https://raw.githubusercontent.com/terryhycheng/travel-app/main/src/client/assets/travel-app-preview.jpg)

## 🌟Overview

Have you ever imagined there would be an app that could help you organise your trips?

### ⚙️Features

Let me introduce you a brand new personal travel app which includes the following features:

- ✅ Excellent UI design to display your trips in one single page
- ✅ 3 countries (USA, UK & Japan) to select
- ✅ Date pickers and displays to visualise the duration of your trips
- ✅ Weather information for you to plan better

This is also the capstone project for my nanodegree programme of [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) on [Udacity](https://www.udacity.com/).

## ⚡️Usage

After you pull all the files to your local storage, the first thing to do is to install all the packages inside the folder with the command:

```
npm install
```

Then you need to set up a `.env` file with the following template.

```
WEATHER_API_KEY= **Replace this with your own API key**
GEONAMES_NAME= **Replace this with your own API key**
PHOTO_API_KEY= **Replace this with your own API key**
```

You have to have your own API keys to use this app. This project uses the following 3 APIs:

1. [Geonames](http://www.geonames.org/export/web-services.html) - To fetch geographical information of a city/country/place
2. [Weatherbit.io](https://www.weatherbit.io/) - To fetch current or forecast weather data
3. [Pixabay](https://pixabay.com/api/docs/) - To search a related image to display on UI

After that, you are ready to build a static folder by running the following command:

```
npm run build
```

Then, you could start the server by running this:

```
npm run server
```

By now, `Listening on port 8000` should be displayed on your console. You are welcome to change the port by modifying the file `/client/server/server.js`.

✌️It's all set now! Enjoy the app!

## 🕹Dependencies

There are some important ones for this project. You could find a whole list of dependencies in `package.json`

- axios
- body-parser
- dotenv
- express
- uuid
