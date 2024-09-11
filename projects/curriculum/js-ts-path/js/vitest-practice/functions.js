function capitalize(str) {
  const puncRegEx = /([.!?])\s*([a-z])/g;
  let output = str.charAt(0).toUpperCase() + str.slice(1);
  output = output.replace(puncRegEx, (match, punc, letter) => {
    return punc + " " + letter.toUpperCase();
  });
  return output;
}

function reverse(str) {
  const charArr = str.split("");
  charArr.reverse();
  return charArr.join("").trim();
}

function calculator() {
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const divide = (x, y) => x / y;
  const multiply = (x, y) => x * y;
  return { add, subtract, divide, multiply };
}

const stringToCodeArr = (str) => {
  const isCharRegEx = /^[a-z]$/;
  const lStr = str.toLowerCase();
  const charArr = lStr.split("");
  return charArr.map((char) => (isCharRegEx.test(char) ? char.charCodeAt(0) : char));
};

const shift = (code, shift, min, max) => {
  const range = max - min + 1;
  const shifted = code + shift;
  if (shifted > max) return min + ((shifted - min) % range);
  else if (shifted < min) return max - ((min - shifted - 1) % range);
  return shifted;
};

function caesarCipher(str, shiftBy) {
  const codeArr = stringToCodeArr(str);
  const shiftedArr = codeArr.map((code) =>
    typeof code === "number" ? shift(code, shiftBy, 97, 122) : code.charCodeAt(0)
  );
  return capitalize(shiftedArr.map((char) => String.fromCharCode(char)).join(""));
}

function analyzeArr(arr) {
  let _length = arr.length;
  let _min = Math.min(...arr);
  let _max = Math.max(...arr);
  let _avg = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  return {
    get length() {
      return _length;
    },
    get min() {
      return _min;
    },
    get max() {
      return _max;
    },
    get avg() {
      return _avg;
    },
  };
}

export { capitalize, reverse, calculator, caesarCipher, analyzeArr };
