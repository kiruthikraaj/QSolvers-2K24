// Memento pattern allows us to store the internal state of the system and restore to previous saved states.

// It has 3 components:
// Originator
// Memento
// Caretaker

class Notes {
  constructor() {
    this.content = "";
  }

  addNotes(note) {
    this.content += note;
  }

  save() {
    return new NotesMemento(this.content);
  }

  getNotes() {
    return this.content;
  }

  undo(memento) {
    this.content = memento.getNotes();
  }
}

class NotesMemento {
  constructor(content) {
    this.content = content;
  }

  getNotes() {
    return this.content;
  }
}

class NotesHistory {
  constructor() {
    this.mementos = [];
  }

  push(memento) {
    this.mementos.push(memento);
  }

  pop() {
    this.mementos.pop();
    return this.mementos[this.mementos.length - 1];
  }
}

let notes = new Notes();
let history = new NotesHistory();

notes.addNotes("Hello ");
history.push(notes.save());

notes.addNotes("Good morning");

history.push(notes.save());
notes.addNotes(" Everyone");
history.push(notes.save());
console.log(notes.getNotes());

console.log(history.mementos);
notes.undo(history.pop());
notes.undo(history.pop());
console.log(notes.getNotes());
console.log(history.mementos);
