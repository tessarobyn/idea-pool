export class Tab {
  constructor(tabList) {
    this.tabsBar = document.getElementById("tabs");
    this.container = document.createElement("div");
    this.input = document.createElement("input");
    this.name = document.createElement("p");
    this.delete = document.createElement("span");
    this.delete.classList.add("material-icons");
    this.delete.classList.add("closeButton");
    this.delete.innerText = "close";
    this.tabList = tabList;
  }
  add(name) {
    if (name) {
      this.name.innerText = name;
      this.container.appendChild(this.name);
      this.delete.style.fontSize = "1rem";
      this.container.appendChild(this.delete);
    } else {
      this.container.appendChild(this.input);
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
  }

  setActive() {
    for (let i = 0; i < this.tabList.length; i++) {
      this.tabList[i].container.classList.remove("active");
    }
    this.container.classList.add("active");
  }

  addEvents() {
    this.delete.addEventListener("click", () => {
      this.remove();
    });
    this.container.addEventListener("click", () => {
      this.setActive();
    });
  }

  addName() {}
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
