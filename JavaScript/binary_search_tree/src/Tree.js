class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  includes() {}
  insert() {}
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
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function buildTree(arr) {
  // sort and remove dupes
}
