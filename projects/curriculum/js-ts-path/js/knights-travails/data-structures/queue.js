function node(data, next) {
  let _data = data;
  let _next = next;
  return {
    get data() {
      return _data;
    },
    set data(newData) {
      _data = newData;
    },
    get next() {
      return _next;
    },
    set next(newNext) {
      _next = newNext;
    },
  };
}

function queue() {
  let _head = null;
  let _tail = null;
  let _size = 0;

  const enqueue = (data) => {
    const newNode = node(data);
    if (_size === 0) {
      _head = newNode;
      _tail = newNode;
    } else {
      _tail.next = newNode;
      _tail = newNode;
    }
    _size++;
  };

  const dequeue = () => {
    if (_size === 0) return null;
    else {
      const output = _head.data;
      _head = _head.next;
      _size--;
      if (_size === 0) _tail = null;
      return output;
    }
  };

  return {
    get peek() {
      return _head ? _head.data : null;
    },
    get size() {
      return _size;
    },
    get isEmpty() {
      return _size === 0;
    },
    enqueue,
    dequeue,
  };
}

export { queue };
