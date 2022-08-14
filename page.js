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
    const images = ["cards", "images", "stickyNotes", "whiteboard"];
    for (let i = 0; i < text.length; i++) {
      const option = document.createElement("div");
      const p = document.createElement("p");
      p.innerText = text[i];
      option.appendChild(p);
      const icon = document.createElement("img");
      icon.src = "img/" + images[i] + "Thumbnail.PNG";
      icon.classList.add("icon");
      icon.addEventListener("click", () => {
        newTabType();
      });
      option.appendChild(icon);
      grid.appendChild(option);
    }
    this.container.appendChild(grid);
  }
  load() {
    this.setup();
  }

  deleted() {
    this.container.innerText = "";
    this.id;
    const head = document.createElement("h2");
    head.innerText = "Tab deleted";
    this.container.appendChild(head);
    const p = document.createElement("p");
    p.innerText = "Choose one of your existing tabs or create a new one";
    this.container.appendChild(p);
  }
}
