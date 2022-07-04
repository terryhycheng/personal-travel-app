//Set items to local storage
const setStorage = (data) => {
  Client.data.push(data);
  console.log("All Data : ", JSON.stringify(Client.data));
  Client.updateUI(data);
};

//Remove item from storage

export { setStorage };
