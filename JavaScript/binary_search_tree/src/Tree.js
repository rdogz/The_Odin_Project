import { mergeSort } from "./mergeSort.js";

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  includes(value) {
    if (postorder(this.root).includes(value)) return true;

    return false;
  }

  insert(value) {}

  deleteItem(value) {}
  levelOrderForEach(callback) {
    // breadth-first level order passing each element to callback
    return new Error("A callback is required");
  }
  inOrderForEach(callback) {
    //depth-first order
    return new Error("A callback is required");
  }
  preOrderForEach(callback) {
    //depth-first order
    return new Error("A callback is required");
  }
  postOrderForEach(callback) {
    //depth-first order
    return new Error("A callback is required");
  }

  height(value) {
    return undefined;
  }

  depth(value) {
    return undefined;
  }

  isBalanced() {}

  rebalance() {}
}

class Node {
  constructor(value, left = null, right = null) {
    this.data = value;
    this.left = left;
    this.right = right;
  }
}

function buildTree(arr) {
  // sort and remove dupes
  let sorted = mergeSort(arr);
  sorted = clearDupes(sorted);

  const root = linkTreeNodes(sorted);

  return root;
}

function clearDupes(arr) {
  let retArr = [];
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      retArr.push(arr[i]);
    }
    i++;
    j++;
  }

  retArr.push(arr[i]);
  return retArr;
}

function linkTreeNodes(arr) {
  if (arr.length === 0) return null;
  const halfArr = Math.floor(arr.length / 2);
  const root = new Node(arr[halfArr]);

  if (arr.length === 1) {
    return root;
  } else {
    root.left = linkTreeNodes(arr.slice(0, halfArr));
    root.right = linkTreeNodes(arr.slice(halfArr + 1, arr.length));
  }

  return root;
}

function preorder(node) {
  if (node === null || node === undefined) return;

  // root
  return preorder(node.left);
  return preorder(node.right);
}
function inorder(node) {
  if (node === null || node === undefined) return;

  return preorder(node.left);
  // root
  return preorder(node.right);
}

function postorder(node) {
  let arr = [];
  if (node === null || node === undefined) return arr;

  for (const key of postorder(node.left)) {
    arr.push(key);
  }
  for (const key of postorder(node.right)) {
    arr.push(key);
  }

  arr.push(node.data);

  return arr;
}

export { Tree };
