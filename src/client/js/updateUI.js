//Update UI
const updateUI = (data) => {
  //Read data from local storage
  console.log(`UI Updated! New data : ${JSON.stringify(data)}`);
  const div = document.createElement("div");
  div.setAttribute("id", data.id);
  div.classList.add("holder", "box");
  //Event listener : remove the element while clicked
  div.addEventListener("click", () => {
    Client.data_list.splice(
      Client.data_list.indexOf(
        Client.data_list.filter((each) => each.id === data.id)[0]
      ),
      1
    );
    div.remove();
    console.log(Client.data_list);
  });
  div.innerHTML = `
    <h3>${data.name}</h3>
    <p>${data.id}</p>
  `;
  card_holder.append(div);
  input.value = "";
  console.log("Input value cleared!");
};

export { updateUI };
