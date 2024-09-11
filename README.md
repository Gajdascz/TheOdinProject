# knights-travails

This repository, as a component of The Odin Project's Node.js curriculum, demonstrates my implementation of graph, queue, and stack data structures in JavaScript. The primary focus is on solving the problem of finding the shortest path for a knight chess piece to reach any target square from a given starting position on an empty chessboard.
<br/>Project Page: [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Learning Outcomes

Working through this project provided me with a unique challenge which introduced me to graph data structures and shortest path algorithms:

- **Developing Graph Data Structures**: I built a basic graph data structure, essential for modeling the chessboard, comprising nodes and their interconnections.
- **Implementing BFS for Shortest Path**: I applied the Breadth-First-Search algorithm, utilizing queues and stacks, to efficiently find the shortest paths in the graph.
- **Practical Graph Traversal Skills**: The project enhanced my skills in navigating through a graph, particularly in tracking the lineage of each node to backtrack paths effectively.
- **Queues and Stacks:** Additional experience creating a queue and stack data structure using linked nodes in a different context.

## Reflection

Delving into the practical application of graph data structures for the first time presented a set of unique challenges and valuable learning experiences. The implementation of the shortest path algorithm, particularly in managing node visitation states and tracking predecessors for path reconstruction, was a significant learning curve. This project not only expanded my understanding of graph traversal but also highlighted areas where further practice is required to gain proficiency. It's clear that working with graph data structures is a complex yet rewarding area that calls for ongoing learning and application.

## graph.js

The `graph.js` module is an Object factory for a simple, abstract graph data structure that provides the core logic for mapping nodes and finding the shortest path.

- `initAdjListNodes(nodes,setPathFn)`: Initializes the graphs adjacency list of nodes and paths based on a 2d array of values (nodes) and setPathFn callback function (paths).
- `getShortestPath(start,target)`: Uses a breadth first search traversal to find the shortest path from a start node to the target. Utilizes a queue for traversal and a stack for creating the path based on predecessors to avoid the costly unshift method.
- `get adjList()`: Returns the adjacency list.

## knightMoves.js

The `knightMoves.js` module is an Object factory to interface a knight piece with the graph data structure. It provides the graph with the fundamental logic required to map nodes between paths specific to the knight piece and can be linked to a specific knight piece.

- `getShortestPath(target,pos)`: Wrapper function for the graphs getShortestPath specific to the knight.
- `shortestPathToString()`: Prints the shortest path to the console.
- `setPathFn(node,nodes)`: Sets the conditions for the initAdjListNodes function in the graph to assign adjacent node paths to each node.
- `get knight()`: Returns knight assigned to this interface.
- `set knight(newKnight)`: Sets knight to this interface.

## chessBoard.js

`chessBoard.js` module is an Object factory for creating a virtual chess board structure. It includes:

- `get squares()`: Returns 2d array of chess board squares.
- `initBoard(rows,cols)`: Initializes the boards squares.
- `isWithinBounds(target)`: Checks if target square is within the bounds of the boards squares.

## knight.js

`knight.js` is an Object factory module for a knight chess piece featuring:

- `get pos()`: Returns knights current position.
- `set pos()`: Sets knights position.
- `isValidMove(position)`: Validates if a target position is valid knight move.

## chessMoveGenerator.js

`chessMoveGenerator.js` contains utility functions for generating all moves a chess piece can make given its current position. At this time it includes:

- `getKnightMoves(pos)`: Generates all valid moves a knight can make from a given position. **Ignores board bounds which should be checked outside of this function.**

## queue.js

`queue.js` is an Object factory module for queue data structures which are key in iterative breadth first traversal algorithms which is used to find the shortest path.

- `enqueue(data)`: Creates and pushes a node containing the input data to the back of the queue.
- `dequeue()`: Removes the first node of the queue and returns its data.
- `get size()`: Returns number of nodes in queue.
- `get peek()`: Returns the data in the first node of the queue.
- `get isEmpty()`: Returns true if the queue has no nodes.

## stack.js

`stack.js` is an Object factory module for stack data structures which is used to efficiently build the shortest path from a list of predecessors.

- `push(data)`: Creates and pushes a node containing the input data to the top of the stack.
- `pop()`: Removes the top node and returns its data.
- `get size()`: Returns the number of nodes in the stack.
- `get top()`: Returns the data in the first node in the stack.
- `get isEmpty()`: Returns true if the stack has no nodes.

## To Be Implemented

- **Graphical User Interface**
- **Additional Chess Pieces**
- **Non-Empty Board Traversal and Pathing**
