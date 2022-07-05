//Handle submission
const submit_handler = (event) => {
  event.preventDefault();
  //pass to data checker
  Client.checker(input.value)
    ? Client.fetchdata(input.value)
    : console.error("Invalid input!");
};

export { submit_handler };
