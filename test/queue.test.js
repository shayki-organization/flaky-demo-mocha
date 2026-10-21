const assert = require('assert');
const { enqueue, dequeue, size } = require('../queue');

describe('queue', () => {
  it('enqueues and dequeues in order', () => {
    const q = [];
    enqueue(q, 'a');
    enqueue(q, 'b');
    assert.strictEqual(dequeue(q), 'a');
    assert.strictEqual(dequeue(q), 'b');
  });

  it('reports the size', () => {
    const q = ['x', 'y'];
    assert.strictEqual(size(q), 2);
  });

  it('returns undefined when empty', () => {
    assert.strictEqual(dequeue([]), undefined);
  });
});

describe('queue flaky', () => {
  it('flaky: drains queue under load', function () {
    if (Math.random() < 0.4) {
      throw new Error('flaky: simulated timeout draining queue');
    }
    const q = ['a', 'b', 'c'];
    assert.strictEqual(size(q), 3);
  });

  it('flaky: preserves order under contention', function () {
    if (Math.random() < 0.4) {
      throw new Error('flaky: simulated out-of-order delivery');
    }
    const q = [];
    enqueue(q, 'first');
    assert.strictEqual(dequeue(q), 'first');
  });
});
