// knight move: 1 ahead, 3 side or 3 ahead, 1 side

import { Queue } from "./Queue.js";

class Node {
  constructor(root, data) {
    this.root = root;
    this.data = data;
  }
}

// knightMoves([row, col], goal)
function knightMoves(start, goal) {
  if (start[0] === goal[0] && start[1] === goal[1]) {
    return [start];
  }
  const queue = new Queue();
  let curNode = new Node(null, start);
  let visited = [`${start[0]},${start[1]}`];
  let shortestPath = [];

  while (true) {
    for (const node of moveKnight(curNode.data)) {
      if (!visited.includes(`${node[0]},${node[1]}`)) {
        visited.push(`${node[0]},${node[1]}`);
        queue.enqueue(new Node(curNode, node));
      }
    }

    curNode = queue.dequeue();

    if (curNode.data[0] === goal[0] && curNode.data[1] === goal[1]) {
      break;
    }
  }

  while (curNode.root !== null) {
    shortestPath.push(curNode.data);
    curNode = curNode.root;
  }

  shortestPath.push(start);
  shortestPath.reverse();

  return shortestPath;
}

function moveKnight(start) {
  const moves = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1],
  ];

  let legalMoves = [];

  for (const [moveX, moveY] of moves) {
    const nodeX = moveX + start[0];
    const nodeY = moveY + start[1];

    if (nodeX >= 0 && nodeX <= 7 && nodeY >= 0 && nodeY <= 7) {
      legalMoves.push([nodeX, nodeY]);
    }
  }

  return legalMoves;
}

function printKnightPath(arr, moves) {
  console.log(`Moves: ${moves}`);
  console.log("Path: ");
  let i;
  for (i = 0; i < arr.length - 1; i++) {
    console.log(` [${arr[i]}]`);
    console.log("   |");
    console.log("   v");
  }
  console.log(` [${arr[i]}]`);
}

let currentKnightMove = knightMoves([4, 3], [4, 6]);
printKnightPath(currentKnightMove, currentKnightMove.length - 1);

currentKnightMove = knightMoves([3, 3], [3, 3]);
printKnightPath(currentKnightMove, currentKnightMove.length - 1);

currentKnightMove = knightMoves([0, 0], [7, 7]);
printKnightPath(currentKnightMove, currentKnightMove.length - 1);
