function createPool(input) {
  if (input.value != "") {
    localStorage.setItem("currentPoolName", input.value);
  } else {
    localStorage.setItem("currentPoolName", "untitled");
  }
  window.location.href = "pool.html";
}

function createNew(createButton) {
  const body = document.body;
  body.removeChild(createButton);

  const container = document.createElement("div");
  const input = document.createElement("input");
  input.placeholder = "add pool name";
  const button = document.createElement("button");
  button.innerText = "create";
  button.addEventListener("click", () => {
    createPool(input);
  });
  container.appendChild(input);
  container.appendChild(button);
  body.appendChild(container);
}

const createButton = document.getElementById("createNew");
createButton.addEventListener("click", () => {
  createNew(createButton);
});
