export class Page {
  constructor(id) {
    this.id = id;
    this.setup();
  }
  setup() {
    this.container = document.getElementById("content");
    this.container.innerText = "";
    const head = document.createElement("h2");
    head.innerText = "Select tab type:" + String(this.id);
    this.container.appendChild(head);
    const grid = document.createElement("div");
    grid.classList.add("optionsGrid");
    const text = ["Cards", "Images", "Sticky Notes", "Whiteboard"];
    for (let i = 0; i < text.length; i++) {
      const option = document.createElement("div");
      const p = document.createElement("p");
      p.innerText = text[i];
      option.appendChild(p);
      const icon = document.createElement("div");
      icon.classList.add("icon");
      option.appendChild(icon);
      grid.appendChild(option);
    }
    this.container.appendChild(grid);
  }
  load() {
    this.setup();
  }
  reset() {
    console.log("here");
    this.container.innerText = "";
    this.id;
    const head = document.createElement("h2");
    head.innerText = "Add a tab to get started";
    this.container.appendChild(head);
    const p = document.createElement("p");
    p.innerText = "Press the plus button in the top left";
    this.container.appendChild(p);
    const p2 = document.createElement("p");
    p2.innerText = "Add a name to your tab when it appears";
    this.container.appendChild(p2);
  }
}
