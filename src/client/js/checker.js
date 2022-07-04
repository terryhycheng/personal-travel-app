//Input data checker
const checker = (data) => {
  //check if data is valid
  if (data) {
    console.log("Data checked.");
    return true;
  } else {
    console.log("Data is not valid.");
    return false;
  }
};

export { checker };
