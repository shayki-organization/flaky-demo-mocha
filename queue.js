function enqueue(queue, item) {
  queue.push(item);
}

function dequeue(queue) {
  return queue.shift();
}

function size(queue) {
  return queue.length;
}

module.exports = { enqueue, dequeue, size };
