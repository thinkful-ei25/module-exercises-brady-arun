'use strict';

/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function() {
  const items = [
    // { id: cuid(), name: 'apples', checked: false },
    // { id: cuid(), name: 'oranges', checked: false },
    // { id: cuid(), name: 'milk', checked: true },
    // { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  function findById(id) {
    return this.items.find(item => id === item.id);
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (error) {
      console.error(`Could not add item: ${error.message}`);
    }
  }

  function findAndToggleChecked(id) {
    const item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } catch (error) {
      console.error(`Cannot update name: ${error.message}`);
    }
  }

  function findAndDelete(id) {
    const itemToDelete = this.findById(id);
    this.items = this.items.filter(item => item !== itemToDelete);
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete

  };
})();
