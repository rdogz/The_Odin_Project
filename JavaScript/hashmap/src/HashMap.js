class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = Array.from({ length: capacity }, () => []);
    this.size = 0;
  }

  hash(key) {
    //takes a string key and produces a hash code with it
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    // If the key already exists in the hash map, then the old value associated with it should be overwritten by the new one.
    const index = this.hash(key);

    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index];
    for (const keyValue of bucket) {
      if (keyValue[0] === key) {
        keyValue[1] = value;
        return;
      }
    }

    bucket.push([key, value]);

    this.size++;

    if (this.size > this.loadFactor * this.capacity) {
      this.resize(this.capacity * 2);
    }
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];

    for (const [bucketKey, value] of bucket) {
      if (bucketKey === key) return value;
    }
    return undefined;
  }

  has(key) {
    const bucket = this.buckets[this.hash(key)];

    for (const [bucketKey] of bucket) {
      if (bucketKey === key) return true;
    }
    return false;
  }

  remove(key) {
    const bucket = this.buckets[this.hash(key)];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;
  }

  keys() {
    let retArr = [];

    for (const bucket of this.buckets) {
      for (const [bucketKey, value] of bucket) {
        retArr.push(bucketKey);
      }
    }

    return retArr;
  }

  values() {
    let retArr = [];

    for (const bucket of this.buckets) {
      for (const [bucketKey, value] of bucket) {
        retArr.push(value);
      }
    }

    return retArr;
  }

  entries() {
    let retArr = [];
    for (const bucket of this.buckets) {
      for (const [bucketKey, value] of bucket) {
        retArr.push([bucketKey, value]);
      }
    }
    return retArr;
  }

  resize(newCapacity) {
    const oldEntries = this.entries();
    this.capacity = newCapacity;
    this.buckets = Array.from({ length: newCapacity }, () => []);
    this.size = 0;

    for (const [key, value] of oldEntries) {
      this.set(key, value);
    }
  }
}

export { HashMap };
