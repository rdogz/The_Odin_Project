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

prettyPrint(test.root);
console.log(test.includes(7));
console.log(test.includes(69));

test.insert(69);
prettyPrint(test.root);
test.deleteItem(67);
console.log("----------------------------------");
prettyPrint(test.root);
