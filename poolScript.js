import { AddTab, Tab } from "./tab.js";

const addTabButton = new AddTab();
addTabButton.add("+");

const tabList = [];

addTabButton.container.addEventListener("click", () => {
  const tab = new Tab(tabList);
  tab.add("tab");
});

for (let i = 0; i < tabList.length; i++) {
  tabList[i].container.addEventListener("click"),
    () => {
      console.log("i was clicked!");
    };
}
