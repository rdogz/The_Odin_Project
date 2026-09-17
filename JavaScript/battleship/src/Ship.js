class Ship {
  constructor(length, hits) {
    this.length = length;
    this.hits = hits;
  }

  isSunk() {
    return this.length === this.hits;
  }
}
