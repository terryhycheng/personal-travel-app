import { data_list, fetchdata } from "./js/app";
import { submit_handler } from "./js/submit";
import { checker } from "./js/checker";
import { setStorage } from "./js/storage";
import { updateUI } from "./js/updateUI";

//Import styles (.scss)
import "./styles/index.scss";

//Global variables
const today = new Date();
const today_string = `${today.getFullYear()}-${
  today.getMonth() + 1 <= 9
    ? "0" + (today.getMonth() + 1).toString()
    : today.getMonth() + 1
}-${today.getDate() <= 9 ? "0" + today.getDate().toString() : today.getDate()}`;

//Element selection
const country = document.querySelector("#country");
let city = document.querySelector("#city");
let departing_date = document.querySelector("#departing_date");
let return_date = document.querySelector("#return_date");
const submitbtn = document.querySelector("#submitbtn");
const card_holder = document.querySelector("#card_holder");
const no_trip_box = document.querySelector("#no_trip_box");
const required_warning = document.querySelector("#required_warning");
const cityname_warning = document.querySelector("#cityname_warning");
const date_warning = document.querySelector("#date_warning");
const trip_length_num = document.querySelector("#trip_length_num");
const trip_no_num = document.querySelector("#trip_no_num");

//Clear warnings
const clearWarnings = () => {
  required_warning.classList.add("hide");
  cityname_warning.classList.add("hide");
  date_warning.classList.add("hide");
};

//Event listeners
submitbtn.addEventListener("click", submit_handler);
country.addEventListener("change", clearWarnings);
city.addEventListener("focus", clearWarnings);
departing_date.addEventListener("change", clearWarnings);
return_date.addEventListener("change", clearWarnings);
departing_date.addEventListener("change", () => {
  return_date.setAttribute("min", departing_date.value);
});

//Limit date input
departing_date.setAttribute("min", today_string);
return_date.setAttribute("min", today_string);

for (let data of Object.keys(localStorage)) {
  updateUI(JSON.parse(localStorage.getItem(data)), localStorage);
}

export { checker, setStorage, updateUI, data_list, fetchdata };
