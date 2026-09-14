import { Node } from "./Node.js";

class LinkedList {
  constructor() {
    this.firstNode = null;
    this.lastNode = null;
  }
  // adds new node containing value to the end of the list
  append(value) {
    let curNode = this.lastNode;

    if (curNode === null) {
      curNode = new Node(value);
      this.firstNode = curNode;
      this.lastNode = curNode;
      return;
    }

    curNode.next = new Node(value);
    curNode.next.prev = curNode;
    curNode = curNode.next;
    this.lastNode = curNode;
  }

  // adds new node containing value to the start of the list
  prepend(value) {
    let curNode = this.firstNode;

    if (curNode === null) {
      curNode = new Node(value);
      this.firstNode = curNode;
      this.lastNode = curNode;
      return;
    }

    let newNode = new Node(value);
    this.firstNode.prev = newNode;
    newNode.next = this.firstNode;
    this.firstNode = newNode;
  }

  // returns total number of nodes
  size() {
    let nodeCount = 0;
    let node = this.firstNode;

    while (node != null) {
      nodeCount++;
      node = node.next;
    }

    return nodeCount;
  }

  // return the value of the first node, undefined if empty
  head() {
    if (this.firstNode) {
      return this.firstNode.value;
    }

    return undefined;
  }

  // return the value of the final node, undefined if empty
  tail() {
    if (this.lastNode) {
      return this.lastNode.value;
    }

    return undefined;
  }

  // return value of node at index
  at(index) {
    let nodeCount = 0;
    let tempNode = this.firstNode;

    if (tempNode === null) return undefined;

    while (tempNode !== null) {
      if (nodeCount === index) {
        return tempNode.value;
      }
      nodeCount++;
      tempNode = tempNode.next;
    }
  }

  // remove node from head and return value
  pop() {
    const retValue = this.head();
    if (retValue === undefined) return retValue;

    this.firstNode = this.firstNode.next;

    if (this.firstNode === null) {
      this.lastNode = null;
    }
    return retValue;
  }

  // return true if value is in list
  contains(value) {
    let tempNode = this.firstNode;
    let listSize = this.size();

    for (let i = 0; i < listSize; i++) {
      if (tempNode.value === value) {
        return true;
      }

      tempNode = tempNode.next;
    }

    return false;
  }

  // return index where value is
  findIndex(value) {
    let tempNode = this.firstNode;
    let listSize = this.size();

    for (let i = 0; i < listSize; i++) {
      if (tempNode.value === value) {
        return i;
      }

      tempNode = tempNode.next;
    }

    return -1;
  }

  // represents linked list objects as strings, if empty return empty string
  toString() {
    let curNode = this.firstNode;
    let retString = "";

    if (curNode === null) {
      return retString;
    }

    while (curNode !== null) {
      retString += `( ${curNode.value} ) -> `;
      curNode = curNode.next;
    }

    retString += `null`;
    return retString;
  }
}

export { LinkedList };
