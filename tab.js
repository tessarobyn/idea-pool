import { Page } from "./page.js";
export class Tab {
  constructor(tabList) {
    if (tabList) {
      this.tabList = tabList;
      this.id = this.tabList.length;
      this.page;
      this.delete = document.createElement("span");
      this.delete.classList.add("material-icons");
      this.delete.classList.add("closeButton");
      this.delete.innerText = "close";
      this.input = document.createElement("input");
    }

    this.tabsBar = document.getElementById("tabs");
    this.container = document.createElement("div");
    this.name = document.createElement("p");
  }
  add(name) {
    if (name) {
      this.name.innerText = name;
      this.container.appendChild(this.name);
      this.delete.style.fontSize = "1rem";
      this.container.appendChild(this.delete);
    } else {
      this.container.appendChild(this.input);
      this.input.placeholder = "add tab name";
      this.input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          this.addName();
        }
      });
    }
    this.tabsBar.insertBefore(
      this.container,
      this.tabsBar.children[this.tabsBar.childElementCount - 1]
    );
    this.setActive();
    this.tabList.push(this);

    this.addEvents();
  }

  remove() {
    const index = this.tabList.indexOf(this);
    this.tabList.splice(index, 1);
    this.tabsBar.removeChild(this.container);
    this.page.deleted();
  }

  setActive() {
    for (let i = 0; i < this.tabList.length; i++) {
      this.tabList[i].container.classList.remove("active");
    }
    this.container.classList.add("active");
    try {
      if (this.tabList.length > 0) {
        this.page.load();
      }
    } catch {}
  }

  addEvents() {
    this.delete.addEventListener("click", (event) => {
      this.remove();
      event.stopImmediatePropagation();
    });
    this.container.addEventListener("click", () => {
      this.setActive();
    });
  }

  addPage() {
    this.page = new Page(this.id);
  }

  addName() {
    if (this.input.value === "") {
      this.name.innerText = "untitled";
    } else {
      this.name.innerText = this.input.value;
    }
    this.container.removeChild(this.input);
    this.container.appendChild(this.name);
    this.delete.style.fontSize = "1rem";
    this.container.appendChild(this.delete);
    this.addPage();
  }
}

export class AddTab extends Tab {
  constructor() {
    super();
  }

  add() {
    this.name.innerText = "+";
    this.container.appendChild(this.name);
    this.tabsBar.appendChild(this.container);
  }
}
