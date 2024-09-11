import { node as listNode } from "./node.js";

function singlyLinkedList() {
  let _head = null;
  let _tail = null;
  let _size = 0;

  const setFirstNode = (node) => {
    _head = node;
    _tail = node;
    _size = 1;
  };

  const append = (name, data = {}) => {
    const newNode = listNode({ name, data });
    if (!_head) {
      setFirstNode(newNode);
      return;
    } else {
      _tail.next = newNode;
      _tail = newNode;
      _size++;
    }
  };

  const prepend = (name, data = {}) => {
    const newNode = listNode({ name, data });
    if (!_head) {
      setFirstNode(newNode);
      return;
    } else {
      newNode.next = _head;
      _head = newNode;
      _size++;
    }
  };

  const at = (index) => {
    try {
      if (!_head || index < 0 || index >= _size) throw new Error(`List empty or input index ${index} out of bounds.`);
      let currentNode = _head;
      for (let i = 0; i < index; i++) currentNode = currentNode.next;
      return currentNode;
    } catch (error) {
      console.error(error);
    }
  };
  const pop = () => {
    if (_head) {
      if (_head === _tail) {
        _head = null;
        _tail = null;
      } else {
        let currentNode = _head;
        while (currentNode.next && currentNode.next !== _tail) currentNode = currentNode.next;
        currentNode.next = null;
        _tail = currentNode;
      }
      _size--;
    }
  };
  const contains = (name) => {
    let currentNode = _head;
    while (currentNode) {
      if (currentNode.name === name) return true;
      currentNode = currentNode.next;
    }
    return false;
  };
  const find = (name) => {
    let currentNode = _head;
    for (let i = 0; i < _size; i++) {
      if (currentNode.name === name) return i;
      currentNode = currentNode.next;
    }
    return -1;
  };
  const toString = () => {
    if (!_head) return "Empty List";
    let currentNode = _head;
    let listString = "";
    while (currentNode.next) {
      listString += `(${currentNode.name})-->`;
      currentNode = currentNode.next;
    }
    listString += "null";
    return listString;
  };
  const insertAt = (name, data = {}, index) => {
    try {
      if (index < 0 || index >= _size) throw new Error(`Input index ${index} out of bounds.`);
      if (index === 0) {
        prepend(name, data);
        return;
      }
      const newNode = listNode({ name, data });
      if (!_head) {
        setFirstNode(newNode);
        return;
      } else {
        let currentNode = _head;
        for (let i = 0; i < index - 1; i++) currentNode = currentNode.next;
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
      _size++;
    } catch (error) {
      console.error(error);
    }
  };
  const removeAt = (index) => {
    try {
      if (!_head || index < 0 || index >= _size) throw new Error(`List empty or input index ${index} out of bounds.`);
      if (index === 0) {
        _head = _head.next;
        if (_size === 1) _tail = null;
      } else {
        let currentNode = _head;
        for (let i = 0; i < index - 1; i++) currentNode = currentNode.next;
        if (index === _size - 1) _tail = currentNode;
        currentNode.next = currentNode.next.next;
      }
      _size--;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    get head() {
      return _head;
    },
    get tail() {
      return _tail;
    },
    get size() {
      return _size;
    },
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

export { singlyLinkedList };
