const assert = require("node:assert");
const { sum, average } = require("./sum");

assert.strictEqual(sum([1, 2, 3]), 6);
assert.strictEqual(sum([5]), 5);
assert.strictEqual(sum([]), 0);

assert.strictEqual(average([1, 2, 3]), 2);
assert.strictEqual(average([5]), 5);
assert.strictEqual(average([]), 0);

console.log("ok");
