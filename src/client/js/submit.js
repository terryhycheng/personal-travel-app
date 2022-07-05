//Handle submission
const submit_handler = (data) => {
  //pass to data checker
  Client.checker(data)
    ? Client.fetchdata(data)
    : console.error("Invalid input!");
};

export { submit_handler };
