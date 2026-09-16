class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail++] = item;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;

    return item;
  }

  peek() {
    return this.items[this.head];
  }

  isEmpty() {
    return this.head === this.tail;
  }

  size() {
    return this.tail - this.head;
  }
}

export { Queue };
