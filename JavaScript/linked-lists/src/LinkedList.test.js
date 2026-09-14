import { LinkedList } from "./LinkedList.js";

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe("append()", () => {
    test("adds a node to the end of the list", () => {
      list.append("dog");
      list.append("cat");

      expect(list.head()).toBe("dog");
      expect(list.tail()).toBe("cat");
    });

    test("works when appending to an empty list", () => {
      list.append("dog");

      expect(list.head()).toBe("dog");
      expect(list.tail()).toBe("dog");
      expect(list.size()).toBe(1);
    });
  });

  describe("prepend()", () => {
    test("adds a node to the start of the list", () => {
      list.append("dog");
      list.append("cat");
      list.prepend("parrot");

      expect(list.head()).toBe("parrot");
      expect(list.tail()).toBe("cat");
    });

    test("works when prepending to an empty list", () => {
      list.prepend("dog");

      expect(list.head()).toBe("dog");
      expect(list.tail()).toBe("dog");
      expect(list.size()).toBe(1);
    });
  });

  describe("size()", () => {
    test("returns the number of nodes", () => {
      expect(list.size()).toBe(0);

      list.append("dog");
      list.append("cat");
      list.append("parrot");

      expect(list.size()).toBe(3);
    });
  });

  describe("head()", () => {
    test("returns the value of the first node", () => {
      list.append("dog");
      list.append("cat");

      expect(list.head()).toBe("dog");
    });

    test("returns undefined for an empty list", () => {
      expect(list.head()).toBeUndefined();
    });
  });

  describe("tail()", () => {
    test("returns the value of the last node", () => {
      list.append("dog");
      list.append("cat");

      expect(list.tail()).toBe("cat");
    });

    test("returns undefined for an empty list", () => {
      expect(list.tail()).toBeUndefined();
    });
  });

  describe("at()", () => {
    beforeEach(() => {
      list.append("dog");
      list.append("cat");
      list.append("parrot");
    });

    test("returns the value at the given index", () => {
      expect(list.at(0)).toBe("dog");
      expect(list.at(1)).toBe("cat");
      expect(list.at(2)).toBe("parrot");
    });

    test("returns undefined for an invalid index", () => {
      expect(list.at(3)).toBeUndefined();
      expect(list.at(10)).toBeUndefined();
      expect(list.at(-1)).toBeUndefined();
    });
  });

  describe("pop()", () => {
    test("removes and returns the head node", () => {
      list.append("dog");
      list.append("cat");
      list.append("parrot");

      expect(list.pop()).toBe("dog");
      expect(list.head()).toBe("cat");
      expect(list.size()).toBe(2);
    });

    test("returns undefined when the list is empty", () => {
      expect(list.pop()).toBeUndefined();
    });

    test("updates the list correctly when removing the only node", () => {
      list.append("dog");

      expect(list.pop()).toBe("dog");
      expect(list.head()).toBeUndefined();
      expect(list.tail()).toBeUndefined();
      expect(list.size()).toBe(0);
    });
  });

  describe("contains()", () => {
    beforeEach(() => {
      list.append("dog");
      list.append("cat");
      list.append("parrot");
    });

    test("returns true when the value exists", () => {
      expect(list.contains("cat")).toBe(true);
    });

    test("returns false when the value does not exist", () => {
      expect(list.contains("turtle")).toBe(false);
    });
  });

  describe("findIndex()", () => {
    beforeEach(() => {
      list.append("dog");
      list.append("cat");
      list.append("parrot");
    });

    test("returns the index of the matching value", () => {
      expect(list.findIndex("dog")).toBe(0);
      expect(list.findIndex("cat")).toBe(1);
      expect(list.findIndex("parrot")).toBe(2);
    });

    test("returns -1 when the value is not found", () => {
      expect(list.findIndex("turtle")).toBe(-1);
    });

    test("returns the index of the first matching value", () => {
      list.append("cat");

      expect(list.findIndex("cat")).toBe(1);
    });
  });

  describe("toString()", () => {
    test("returns an empty string for an empty list", () => {
      expect(list.toString()).toBe("");
    });

    test("returns the list in the expected format", () => {
      list.append("dog");
      list.append("cat");
      list.append("parrot");

      expect(list.toString()).toBe("( dog ) -> ( cat ) -> ( parrot ) -> null");
    });
  });
});
