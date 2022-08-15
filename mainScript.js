function createNew(createButton) {
  const body = document.body;
  const container = document.createElement("div");
  const input = document.createElement("input");
  input.placeholder = "add pool name";
  const button = document.createElement("button");
  button.innerText = "create";
  body.removeChild(createButton);
  container.appendChild(input);
  container.appendChild(button);
  body.appendChild(container);
}

const createButton = document.getElementById("createNew");
createButton.addEventListener("click", () => {
  createNew(createButton);
});
