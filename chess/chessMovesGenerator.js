function getKnightMoves(pos) {
  const possibleMoves = [];
  for (let horizontal = -2; horizontal <= 2; horizontal++) {
    if (horizontal === 0) continue;
    for (let vertical = -2; vertical <= 2; vertical++) {
      if (vertical === 0 || Math.abs(horizontal) === Math.abs(vertical)) continue;
      const x = pos[0] + horizontal;
      const y = pos[1] + vertical;
      possibleMoves.push([x, y]);
    }
  }
  return possibleMoves;
}

export { getKnightMoves };
