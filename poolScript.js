function addTab() {
  const tabsBar = document.getElementById("tabs");
  const container = document.createElement("div");
  const text = document.createElement("p");
  text.innerText = "tab";
  container.appendChild(text);
  tabsBar.insertBefore(
    container,
    tabsBar.children[tabsBar.childElementCount - 1]
  );
}

const addTabButton = document.getElementById("addTab");
addTabButton.addEventListener("click", () => {
  addTab();
});
