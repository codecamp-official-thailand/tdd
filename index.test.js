import { greet } from "./index";

test("Requirement-1", () => {
  expect(greet("Bob")).toBe("Hello, Bob.");
});

test("Requirement-2", () => {
  expect(greet(null)).toBe("Hello, my friend.");
});

test("Requirement-3", () => {
  expect(greet("JERRY")).toBe("HELLO JERRY!");
});

test("Requirement-4", () => {
  expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
  expect(greet("Jill", "Jane")).toBe("Hello, Jill and Jane.");
});

test("Requirement-5", () => {
  expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
  expect(greet(["Amy", "Brian", "Charlotte", "Google"])).toBe("Hello, Amy, Brian, Charlotte, and Google.");
});

test("Requirement-6", () => {
  expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
  expect(greet(["Amy", "BRIAN", "CHARLOTTE"])).toBe("Hello, Amy. AND HELLO BRIAN AND CHARLOTTE!");
  expect(greet(["AMY", "BRIAN", "CHARLOTTE"])).toBe("HELLO AMY BRIAN AND CHARLOTTE!");
});

test("Requirement-7", () => {
  expect(greet(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
  expect(greet(["Bob, Charlie", "Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
  expect(greet(["Bob, Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
});

test("Requirement-8", () => {
  expect(greet(["Bob", '"Charlie, Dianne"'])).toBe("Hello, Bob, Charlie, and Dianne.");
});
