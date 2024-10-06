"use strict";
class Storage {
  #items;
  items = [];
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  set changeItems(newItems) {
    this.#items = newItems;
    return this;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    if (this.#items.includes(itemToRemove)) {
      if (this.#items.indexOf(itemToRemove) !== -1) {
        this.#items.splice(this.#items.indexOf(itemToRemove), 1);
      }
      return this;
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
