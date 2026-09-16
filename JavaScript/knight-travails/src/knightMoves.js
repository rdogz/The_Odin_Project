// knight move: 1 ahead, 3 side or 3 ahead, 1 side

import { Queue } from "./Queue.js";

class Node {
  constructor(root, position, children) {
    this.root = root;
    this.position = position;
    this.children = children;
  }
}

// 0, x
// 7, x
// x, 0
// x, 7
// knightMoves([row, col], goal)
function knightMoves(start, goal) {
  console.log(moveKnight(start));
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

knightMoves([4, 3], [6, 4]);
