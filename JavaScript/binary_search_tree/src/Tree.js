import { mergeSort } from "./mergeSort.js";

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  // done
  includes(value) {
    if (treeToArray(this.root).includes(value)) return true;

    return false;
  }

  // done
  insert(value) {
    let node = this.root;

    while (node !== undefined) {
      if (node.data < value) {
        if (node.right === undefined) {
          node.right = new Node(value);
          break;
        }
        node = node.right;
      } else if (node.data > value) {
        if (node.left === undefined) {
          node.left = new Node(value);
          break;
        }
        node = node.left;
      }
    }
  }

  // done
  deleteItem(value) {
    this.root = this.deleteItemRecursive(value, this.root);
  }

  // done
  deleteItemRecursive(value, node) {
    if (node === undefined) return undefined;

    if (node.data < value) {
      node.right = this.deleteItemRecursive(value, node.right);
    } else if (node.data > value) {
      node.left = this.deleteItemRecursive(value, node.left);
    } else {
      // no children or 1 child
      if (node.left === undefined) {
        return node.right;
      } else if (node.right === undefined) {
        return node.left;
      }

      // case 2: two children
      let curNode = node.right;
      while (curNode.left !== undefined) {
        curNode = curNode.left;
      }
      node.data = curNode.data;
      node.right = this.deleteItemRecursive(node.data, node.right);
    }

    return node;
  }

  levelOrderForEach(callback) {
    // breadth-first level order passing each element to callback
    if (typeof callback !== "function") {
      throw new Error("A callback is required");
    }

    let queue = [];
    let curQueue = 0;
    let node = this.root;

    if (node === undefined) return;
    while (node !== undefined) {
      callback(node.data);
      if (node.left !== undefined) queue.push(node.left);
      if (node.right !== undefined) queue.push(node.right);
      node = queue[curQueue++];
    }
  }

  inOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback is required");
    }
    const node = this.root;
    if (node === undefined) return;

    inOrder(callback, node);
  }

  preOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback is required");
    }
    const node = this.root;
    if (node === undefined) return;

    preOrder(callback, node);
  }

  postOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback is required");
    }
    const node = this.root;
    if (node === undefined) return;

    postOrder(callback, node);
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
  constructor(value, left = undefined, right = undefined) {
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
  if (arr.length === 0) return undefined;
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

function preOrder(callback, node) {
  // root
  // node.left
  // node.right
  if (node === undefined) return;

  callback(node.data);
  preOrder(callback, node.left);
  preOrder(callback, node.right);
}

function inOrder(callback, node) {
  // node.left
  // root
  // node.right

  if (node === undefined) return;

  inOrder(callback, node.left);
  callback(node.data);
  inOrder(callback, node.right);
}

function postOrder(callback, node) {
  if (node === undefined) return;

  postOrder(callback, node.left);
  postOrder(callback, node.right);
  callback(node.data);
}

function treeToArray(node) {
  let arr = [];
  if (node === undefined) return arr;

  for (const key of treeToArray(node.left)) {
    arr.push(key);
  }
  for (const key of treeToArray(node.right)) {
    arr.push(key);
  }

  arr.push(node.data);

  return arr;
}

export { Tree };
