function node({ name = null, data = {}, next = null, prev = undefined } = {}) {
  let _data = data;
  let _next = next;
  let _prev = prev;
  let _name = name;

  const hasDataKey = (key) => Object.keys(_data).includes(key);

  const addData = (key, value) => {
    try {
      if (hasDataKey(key)) throw new Error(`${key} already exists.`);
      else _data[key] = value;
    } catch (error) {
      console.error(error);
    }
  };

  const removeData = (key) => {
    try {
      if (!hasDataKey(key)) throw new Error(`${key} does not exist.`);
      else delete _data[key];
    } catch (error) {
      console.error(error);
    }
  };

  const getData = (key) => {
    try {
      if (!hasDataKey(key)) throw new Error(`${key} does not exist.`);
      else return _data[key];
    } catch (error) {
      console.error(error);
    }
  };

  return {
    get next() {
      return _next;
    },
    get allData() {
      return _data;
    },
    set next(nextNode) {
      _next = nextNode;
    },
    get name() {
      return _name;
    },
    set name(newName) {
      _name = newName;
    },
    ...(_prev !== undefined && {
      set prev(prevNode) {
        _prev = prevNode;
      },
      get prev() {
        return _prev;
      },
    }),
    addData,
    removeData,
    getData,
  };
}

export { node };
