import { AddTab, Tab } from "./tab.js";

const addTabButton = new AddTab();
addTabButton.add("+");

const tabList = [];

addTabButton.container.addEventListener("click", () => {
  const tab = new Tab(tabList);
  tab.add();
});
