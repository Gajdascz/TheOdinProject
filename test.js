import { knightPiece } from "./chess/knight.js";
import { knightMoves } from "./chess/knightMoves.js";

const k = knightPiece([0, 0]);
const kM = knightMoves(k);

const paths = [
  [
    [0, 0],
    [7, 7],
  ],
  [
    [0, 7],
    [7, 0],
  ],
  [
    [4, 4],
    [0, 0],
  ],
  [
    [3, 3],
    [6, 6],
  ],
  [
    [1, 1],
    [6, 6],
  ],
  [
    [7, 7],
    [2, 2],
  ],
];

const test = (paths) => {
  paths.forEach((path) => {
    k.pos = path[0];
    let target = path[1];
    console.log(kM.shortestPathToString(kM.getShortestPath(target)) + "\n");
  });
};

test(paths);
