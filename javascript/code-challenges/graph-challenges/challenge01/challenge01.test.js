// Write your test here
"use strict";

const breadth = require("./challenge01");

describe("breadth first search", () => {
  it("should return the correct order of visited nodes", () => {
    let graph = {
      a: ["b", "c", "d"],
      b: ["a", "d"],
      c: ["a", "e"],
      d: ["a", "b"],
      e: ["c"],
      f: [],
    };
    expect(breadth(graph, "a")).toEqual(["a", "b", "c", "d", "e"]);
  });
});