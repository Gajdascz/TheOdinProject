import { queue } from "./queue.js";
import { stack } from "./stack.js";

function graph() {
  const _adjList = {};

  const initAdjListNodes = (nodes, setPathFn) => {
    nodes.forEach((row) => {
      row.forEach((node) => {
        _adjList[JSON.stringify(node)] = setPathFn(node, nodes);
      });
    });
  };

  const getShortestPath = (start, target) => {
    const startString = JSON.stringify(start);
    const targetString = JSON.stringify(target);
    const predecessors = {};
    const visited = new Set();
    const q = queue();
    q.enqueue(startString);
    visited.add(startString);
    while (!q.isEmpty) {
      let current = q.dequeue();
      if (current === targetString) {
        const pathStack = stack();
        let at = targetString;
        while (at !== undefined) {
          pathStack.push(JSON.parse(at));
          at = predecessors[at];
        }
        const path = [];
        while (!pathStack.isEmpty) path.push(pathStack.pop());
        return path;
      }
      let nextMoves = _adjList[current];
      nextMoves.forEach((move) => {
        if (!visited.has(move)) {
          visited.add(move);
          predecessors[move] = current;
          q.enqueue(move);
        }
      });
    }
  };
  return {
    get adjList() {
      return _adjList;
    },
    initAdjListNodes,
    getShortestPath,
  };
}

export { graph };
