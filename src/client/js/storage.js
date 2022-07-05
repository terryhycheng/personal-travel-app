//Set items to local storage
const setStorage = (data) => {
  Client.data_list.push(data);
  console.log(
    "Localstorage Added! All data : ",
    JSON.stringify(Client.data_list)
  );
  Client.updateUI(data);
};

//Remove item from storage

export { setStorage };
