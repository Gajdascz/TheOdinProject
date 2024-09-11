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

function stack() {
  let _top = null;
  let _size = 0;

  const push = (data) => {
    const newNode = node(data);
    if (_size === 0) {
      _top = newNode;
    } else {
      newNode.next = _top;
      _top = newNode;
    }
    _size++;
  };

  const pop = () => {
    if (_size === 0) return null;
    else {
      const output = _top.data;
      _top = _top.next;
      _size--;
      if (_size === 0) _top = null;
      return output;
    }
  };

  return {
    get top() {
      return _top ? _top.data : null;
    },
    get size() {
      return _size;
    },
    get isEmpty() {
      return _size === 0;
    },
    push,
    pop,
  };
}

export { stack };
