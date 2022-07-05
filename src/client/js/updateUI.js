//Update UI
const updateUI = (data) => {
  //Read data from local storage
  console.log(`UI Updated! New data : ${JSON.stringify(data)}`);
  const div = document.createElement("div");
  div.classList.add("holder", "box");
  div.innerHTML = `
    <h3>${data.name}</h3>
    <p>${data.id}</p>
  `;
  entryholder.append(div);
  input.value = "";
  console.log("Input value cleared!");
};

export { updateUI };
