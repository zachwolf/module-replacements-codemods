import banana from 'array.prototype.find';
var assert = require('assert');

assert.deepEqual(
  banana([1, 2, 3], function (x) {
    return x >= 2;
  }),
  [2, 3],
);
assert.deepEqual(
  banana([1, 2, 3], function (x) {
    return x <= 2;
  }),
  [1, 2],
);
