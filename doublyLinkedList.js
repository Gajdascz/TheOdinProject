import { node as listNode } from "./node.js";

function doublyLinkedList() {
  let _head = null;
  let _tail = null;
  let _size = 0;

  const setFirstNode = function (node) {
    _head = node;
    _tail = node;
    _size = 1;
  };

  const getNode = function (index) {
    let node;
    if (index >= Math.ceil(_size / 2)) node = _tail;
    else node = _head;
    if (node === _tail) {
      for (let i = _size - 1; i > index; i--) node = node.prev;
      return node;
    } else {
      for (let i = 0; i < index; i++) node = node.next;
      return node;
    }
  };

  const append = (name, data = {}) => {
    const newNode = listNode({ name, data, prev: _tail });
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
    const newNode = listNode({ name, data, prev: null });
    if (!_head) {
      setFirstNode(newNode);
      return;
    } else {
      newNode.next = _head;
      _head.prev = newNode;
      _head = newNode;
      _size++;
    }
  };

  const at = (index) => {
    try {
      if (!_head || index < 0 || index >= _size) throw new Error(`List empty or input index ${index} out of bounds.`);
      return getNode(index);
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
        _tail = _tail.prev;
        _tail.next = null;
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
    let listString = `null←(${currentNode.name})⇆`;
    while (currentNode.next) {
      currentNode = currentNode.next;
      listString += `(${currentNode.name})⇆`;
    }
    listString = listString.slice(0, -1) + "→null";
    return listString;
  };

  const insertAt = (name, data = {}, index) => {
    try {
      if (index < 0 || index > _size) throw new Error(`Input index ${index} out of bounds.`);
      if (index === 0) {
        prepend(name, data);
        return;
      }
      if (index === _size) {
        append(name, data);
        return;
      }
      const newNode = listNode({ name, data, prev: null });
      if (!_head) {
        setFirstNode(newNode);
        return;
      } else {
        let currentNode = getNode(index);
        newNode.prev = currentNode.prev;
        newNode.next = currentNode;
        if (newNode.prev) newNode.prev.next = newNode;
        currentNode.prev = newNode;
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
        if (_head) _head.prev = null;
        if (_size === 1) _tail = null;
      } else if (index === _size - 1) {
        pop();
        return;
      } else {
        let currentNode = getNode(index);
        currentNode.prev.next = currentNode.next;
        if (currentNode.next) currentNode.next.prev = currentNode.prev;
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

export { doublyLinkedList };
