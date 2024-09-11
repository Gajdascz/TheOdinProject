function chessBoard() {
  const _board = [];
  const initBoard = (rows = 8, cols = 8) => {
    _board.length = 0;
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) row.push([i, j]);
      _board.push(row);
    }
  };

  const isWithinBounds = (target) => {
    return target[0] < _board[0].length && target[0] >= 0 && target[1] < _board.length && target[1] >= 0;
  };

  return {
    get squares() {
      return _board;
    },
    isWithinBounds,
    initBoard,
  };
}

export { chessBoard };
