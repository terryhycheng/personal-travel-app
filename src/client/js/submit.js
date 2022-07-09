//Handle submission
const submit_handler = (event) => {
  event.preventDefault();
  //pass to data checker
  Client.checker({
    country_input: country.value,
    city_input: city.value,
    departing_date_input: departing_date.value,
    return_date_input: return_date.value,
  });
};

export { submit_handler };
