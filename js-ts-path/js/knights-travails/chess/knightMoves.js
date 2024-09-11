import { knightPiece } from "./knight.js";
import { graph } from "../data-structures/graph.js";
import { chessBoard } from "./chessBoard.js";
import { getKnightMoves } from "./chessMovesGenerator.js";

function knightMoves(knight = null) {
  let _knight = knight;
  const board = chessBoard();
  const g = graph();

  board.initBoard();
  g.initAdjListNodes(board.squares, setPathFn);

  function setPathFn(node, nodes) {
    const paths = [];
    let tmpKnight = knightPiece(node);
    const moves = getKnightMoves(tmpKnight.pos);
    moves.forEach((move) => {
      if (board.isWithinBounds(move) && tmpKnight.isValidMove(move)) paths.push(JSON.stringify(move));
    });
    return paths;
  }

  const getShortestPath = (target, pos = _knight?.pos) => {
    try {
      if (!pos) throw new Error("Invalid starting position. Set knight piece or pass position parameter.");
      return g.getShortestPath(pos, target);
    } catch (error) {
      console.error(error);
    }
  };

  const shortestPathToString = (path) => {
    try {
      if (!Array.isArray(path)) throw new Error("path is not an array.");
      let pathString = "";
      path.forEach((move, index) => {
        if (index === 0) pathString += `==> Start: [${move}]\n`;
        else if (index < path.length - 1) pathString += `--> [${move}] Moves: ${index}\n`;
        else pathString += `==> End: [${move}] in ${index} moves.`;
      });
      return pathString;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    get knight() {
      return _knight;
    },
    set knight(newKnight) {
      _knight = newKnight;
    },
    getShortestPath,
    shortestPathToString,
  };
}

export { knightMoves };
