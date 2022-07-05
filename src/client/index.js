import { data_list, fetchdata } from "./js/app";
import { submit_handler } from "./js/submit";
import { checker } from "./js/checker";
import { setStorage } from "./js/storage";
import { updateUI } from "./js/updateUI";

//Import styles (.scss)
import "./styles/index.scss";

//Element selection
const input = document.querySelector("#input");
const submitbtn = document.querySelector("#submitbtn");
const entryholder = document.querySelector("#entryholder");

//Event listeners
submitbtn.addEventListener("click", submit_handler);

export { checker, setStorage, updateUI, data_list, fetchdata };
