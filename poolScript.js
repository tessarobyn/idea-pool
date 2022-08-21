import { AddTab, Tab } from "./tab.js";

function setName() {
  const title = document.getElementById("poolName");
  title.innerText = localStorage.getItem("currentPoolName");
  return title.innerText;
}

function saveData(title) {
  let titles;
  if (localStorage.getItem("titles") != null) {
    titles = localStorage.getItem("titles").split(",");
    if (!titles.includes(title)) {
      titles = localStorage.getItem("titles") + "," + title;
    } else {
      titles = localStorage.getItem("titles");
    }
  } else {
    titles = title;
  }
  localStorage.setItem("titles", titles);
}

const title = setName();

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", () => {
  saveData(title);
});

const addTabButton = new AddTab();
addTabButton.add("+");

const tabList = [];

addTabButton.container.addEventListener("click", () => {
  const tab = new Tab(tabList);
  tab.add();
});
