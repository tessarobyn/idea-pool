export class Page {
  constructor(id) {
    this.id = id;
    this.setup();
  }
  setup() {
    this.container = document.getElementById("content");
    this.container.innerText = "";
    this.container.className = "content";
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
      icon.id = images[i];
      icon.classList.add("icon");
      icon.addEventListener("click", () => {
        this.newTabType(icon);
      });
      option.appendChild(icon);
      grid.appendChild(option);
    }
    this.container.appendChild(grid);
  }

  load() {
    if (!this.type) {
      this.setup();
    } else {
      this.setupTabType();
    }
  }

  deleted() {
    this.container.innerText = "";
    this.container.className = "content";
    this.id;
    const head = document.createElement("h2");
    head.innerText = "Tab deleted";
    this.container.appendChild(head);
    const p = document.createElement("p");
    p.innerText = "Choose one of your existing tabs or create a new one";
    this.container.appendChild(p);
  }

  setupAddButton() {
    this.button = document.createElement("button");
    this.button.innerText = "+";
    this.button.classList.add("addButton");
    this.container.appendChild(this.button);
  }

  newCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    this.cards.push(card);
    return card;
  }

  addCard() {
    this.container.appendChild(this.newCard());
  }

  setupCards() {
    this.setupAddButton();
    this.cards = [];
    this.button.addEventListener("click", () => {
      this.addCard();
    });
    this.container.classList.add("cardsContainer");
  }

  setupImages() {
    console.log("images coming soon!");
  }

  setupStickyNotes() {
    console.log("sticky notes coming soon!");
  }

  setupWhiteboard() {
    console.log("whiteboard coming soon!");
  }

  setupTabType() {
    this.container.innerText = "";
    switch (this.type) {
      case "cards":
        this.setupCards();
        break;
      case "images":
        this.setupImages();
        break;
      case "stickyNotes":
        this.setupStickyNotes();
        break;
      case "whiteboard":
        this.setupWhiteboard();
        break;
    }
  }

  newTabType(icon) {
    this.type = icon.id;
    this.setupTabType();
  }
}
