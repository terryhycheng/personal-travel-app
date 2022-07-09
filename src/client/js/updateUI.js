//Update UI
const updateUI = (data, data_list = localStorage) => {
  const num = data_list.length;
  let totalDays = 0;
  //Create a div for a new card
  const div = document.createElement("div");
  div.setAttribute("id", data.id);
  div.classList.add("card");
  div.innerHTML = `
  <div id="card_image_box" style="background: url('${data.imageURL}') no-repeat
  center;
background-position: center;
background-size: cover;">
  </div>
  <div id="card_content_holder">
    <div id="card_title_box">
      <div id="card_title_holder">
        <div id="card_title">
          <h3>${data.country === "JP" ? "Japan" : data.country}</h3>
          <h2>${data.city}</h2>
        </div>
        <div class="container" id="date_holder">
          <div>
            <strong>Departing:</strong>
            <span id="display_departing_date">${data.date.departing_date}</span>
          </div>
          <div>
            <strong>Return:</strong>
            <span id="display_return_date">${data.date.return_date}</span>
          </div>
        </div>
      </div>
      <div id="card_trip_length">
        <h3>${data.date.trip_length}</h3>
        <p>nights</p>
      </div>
    </div>
    <div id="card_weather_box">
      <hr />
      <div>
        <strong
          >${
            data.date.fromToday <= 7 ? "Current" : "Predicted"
          } Weather:</strong
        >
      </div>
      <div id="weather_container">
        <img
          src="https://www.weatherbit.io/static/img/icons/${
            data.weather.icon
          }.png"
          alt="weather icon"
          height="50"
        />
        <div>
          <h3>${
            data.weather.low_temp ? data.weather.low_temp : data.weather.temp
          }°C${
    data.weather.max_temp ? ` - ${data.weather.max_temp}°C` : ""
  }</h3>
          <p>${data.weather.description}</p>
        </div>
      </div>
    </div>
    <div id="card_action_box">
      <button id="delbtn_${data.id}">Delete</button>
    </div>
  </div>
  `;
  card_holder.classList.remove("hide");
  no_trip_box.classList.add("hide");
  card_holder.append(div);
  //Update Trip Length and No. of Trips
  trip_length_num.innerHTML = totalDays;
  trip_length_num.innerHTML = calLength(totalDays);
  trip_no_num.innerHTML = data_list.length;
  //Event listener : remove the element while clicked
  const delbtn = document.querySelector(`#delbtn_${data.id}`);
  delbtn.addEventListener("click", () =>
    del_handler(div, data, totalDays, data_list)
  );
};

//Calculate Total Trip Length from items in localStorage
const calLength = (totalNum) => {
  for (let data of Object.keys(localStorage)) {
    const num = JSON.parse(localStorage.getItem(data)).date.trip_length;
    totalNum += num;
  }
  return totalNum;
};

//Delete handler : remove div and update localStorage
const del_handler = (div, data, totalDays, data_list) => {
  div.remove();
  localStorage.removeItem(data.id);
  data_list.length === 0 ? no_trip_box.classList.remove("hide") : "";
  trip_length_num.innerHTML = calLength(totalDays);
  trip_no_num.innerHTML = data_list.length;
};

export { updateUI };
