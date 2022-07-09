//Set items to local storage
const setStorage = (data) => {
  //Clear fields' values
  city.value = "";
  departing_date.value = "";
  return_date.value = "";
  //Set localStorage
  localStorage.setItem(data.id, JSON.stringify(data));
  //Update UI
  Client.updateUI(JSON.parse(localStorage.getItem(data.id)));
};

export { setStorage };
