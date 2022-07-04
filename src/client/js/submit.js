//Handle submission
const submit_handler = (data) => {
  //pass to data checker
  Client.checker(data)
    ? Client.setStorage(data)
    : console.log("Display an Error message on UI.");
};

export { submit_handler };
