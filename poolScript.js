import { AddTab, Tab } from "./tab.js";

function setName() {
  const title = document.getElementById("poolName");
  title.innerText = localStorage.getItem("currentPoolName");
}

setName();

const addTabButton = new AddTab();
addTabButton.add("+");

const tabList = [];

addTabButton.container.addEventListener("click", () => {
  const tab = new Tab(tabList);
  tab.add();
});

window.onbeforeunload = () => {
  return "Are you sure you want to leave? Your data will not be saved";
};
