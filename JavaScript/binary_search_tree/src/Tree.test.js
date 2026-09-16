import { Tree } from "./Tree.js";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const test = new Tree(arr);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
};

console.log("Before:");
prettyPrint(test.root);
console.log("----------------------------------");
test.rebalance();
console.log("After:");

test.insert(0);
test.insert(-1);
test.insert(-2);
test.insert(-3);
prettyPrint(test.root);
console.log(test.height(3));
console.log(test.height(7));
console.log(test.isBalanced());
