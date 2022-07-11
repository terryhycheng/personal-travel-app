//Handle submission
const submit_handler = (event) => {
  event.preventDefault();
  //pass to data checker
  if (
    country.value &&
    city.value &&
    departing_date.value &&
    return_date.value
  ) {
    Client.checker({
      country_input: country.value,
      city_input: city.value,
      departing_date_input: departing_date.value,
      return_date_input: return_date.value,
    });
  } else {
    required_warning.classList.remove("hide");
  }
};

export { submit_handler };
