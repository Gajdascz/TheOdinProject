function knightPiece(startingPosition = [0, 1]) {
  let _pos = startingPosition;
  const isValidMove = (target) => {
    const dx = Math.abs(target[0] - _pos[0]);
    const dy = Math.abs(target[1] - _pos[1]);
    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  };
  return {
    get pos() {
      return _pos;
    },
    set pos(newPos) {
      _pos = newPos;
    },
    isValidMove,
  };
}

export { knightPiece };
