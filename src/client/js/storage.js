//Set items to local storage
const setStorage = (data) => {
  //Clear fields' values
  city.value = "";
  departing_date.value = "";
  return_date.value = "";
  Client.data_list.push(data);
  localStorage.setItem(data.id, JSON.stringify(data));
  Client.updateUI(JSON.parse(localStorage.getItem(data.id)));
};

//Remove item from storage

export { setStorage };
