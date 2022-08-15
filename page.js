export class Page {
  constructor(id) {
    this.id = id;
    this.setup();
    this.cards = [];
    this.notes = [];
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
    const h3Input = document.createElement("input");
    h3Input.placeholder = "add title";
    const p = document.createElement("textarea");
    p.placeholder = "add content";
    card.appendChild(h3Input);
    card.appendChild(p);
    card.classList.add("card");
    this.cards.push(card);
    return card;
  }

  addCard() {
    this.container.appendChild(this.newCard());
  }

  setupCards() {
    this.setupAddButton();
    this.button.addEventListener("click", () => {
      this.addCard();
    });
    this.container.className = "cardsContainer";
    for (let i = 0; i < this.cards.length; i++) {
      this.container.appendChild(this.cards[i]);
    }
  }

  startDrag(note) {
    note.addEventListener("mousemove", (event) => {
      if (this.dragging) {
        this.dragNote(note, event);
      }
    });
    document.body.addEventListener("mouseup", () => {
      console.log(this.dragging);
      this.dragging = false;
    });
  }

  dragNote(note, event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    note.style.top = mouseY - 15 + "px";
    note.style.left = mouseX - 15 + "px";
  }

  resizeNote(input, note) {
    note.style.width = input.style.width;
  }

  newStickyNote() {
    const noteContainer = document.createElement("div");

    const note = document.createElement("div");
    note.addEventListener("mousedown", () => {
      this.dragging = true;
      this.startDrag(noteContainer);
    });
    noteContainer.appendChild(note);

    const input = document.createElement("textarea");
    input.placeholder = "add content";
    new ResizeObserver(() => {
      this.resizeNote(input, note);
    }).observe(input);
    noteContainer.appendChild(input);

    this.notes.push(noteContainer);
    return noteContainer;
  }

  addStickyNote() {
    this.container.appendChild(this.newStickyNote());
  }

  setupStickyNotes() {
    this.setupAddButton();
    this.button.addEventListener("click", () => {
      this.addStickyNote();
    });
    this.container.className = "notesContainer";
    for (let i = 0; i < this.notes.length; i++) {
      this.container.appendChild(this.notes[i]);
    }
  }

  setupImages() {
    console.log("images coming soon!");
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
