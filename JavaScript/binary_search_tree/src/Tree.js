import { mergeSort } from "./mergeSort.js";

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  // done
  includes(value) {
    if (this.root === undefined) return false;

    if (treeToArray(this.root).includes(value)) return true;

    return false;
  }

  // done
  insert(value) {
    if (this.root === undefined) {
      this.root = new Node(value);
      return;
    }

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
      } else if (node.data === value) {
        break;
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
    if (!this.includes(value)) return undefined;
    // find node
    const ourNode = getNode(value, this.root);

    // find height
    const nodeHeight = heightHelper(ourNode);

    return nodeHeight;
  }

  depth(value) {
    if (!this.includes(value)) return undefined;
    // distance from root to node

    const nodeDepth = depthHelper(value, this.root);
    return nodeDepth;
  }

  isBalanced() {
    let queue = [this.root];
    let curQueue = 0;
    let node = this.root;

    while (node !== undefined) {
      let leftHeight;
      let rightHeight;

      if (node.left === undefined) {
        leftHeight = 0;
      } else {
        leftHeight = node.left.data;
      }
      if (node.right === undefined) {
        rightHeight = 0;
      } else {
        rightHeight = node.right.data;
      }

      const diff = this.height(leftHeight) - this.height(rightHeight);
      console.log(diff);
      if (diff > 1 || diff < -1) return false;

      if (node.left !== undefined) queue.push(node.left);
      if (node.right !== undefined) queue.push(node.right);

      node = queue[curQueue++];
    }

    return true;
  }

  rebalance() {
    let treeArr = [];

    this.inOrderForEach((element) => {
      treeArr.push(element);
    });

    this.root = buildTree(treeArr);
  }
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
  if (arr.length === 0) return [];
  let retArr = [];
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j] && arr[i] !== undefined) {
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

function getNode(value, node) {
  let queue = [];
  let curQueue = 0;

  if (node === undefined) return undefined;
  while (node !== undefined) {
    if (node.data === value) return node;
    if (node.left !== undefined) queue.push(node.left);
    if (node.right !== undefined) queue.push(node.right);
    node = queue[curQueue++];
  }
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

function heightHelper(node) {
  if (node === undefined) return 0;
  if (node.left === undefined && node.right === undefined) return 0;
  return 1 + max(heightHelper(node.left), heightHelper(node.right));
}

function max(a, b) {
  if (a > b) return a;
  if (a < b) return b;
  if (a === b) return a;
}

function depthHelper(value, node, currentDepth = 0) {
  if (node === undefined) return 0;
  if (value < node.data) return depthHelper(value, node.left, currentDepth + 1);
  if (value > node.data)
    return depthHelper(value, node.right, currentDepth + 1);

  if (node.data === value) return currentDepth;
}

export { Tree, Node };
