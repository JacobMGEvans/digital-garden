// queue data structure => function factory
export function createQueue() {
  const queue = [];
  return {
    // add or enqueue
    enqueue(item) {
      queue.unshift(item);
    },
    // remove or dequeue
    dequeue() {
      return queue.pop();
    },
    // peek
    peek() {
      return queue[queue.length - 1];
    },
    // length
    get length() {
      return queue.length;
    },
    // isempty
    isEmpty() {
      return queue.length === 0;
    },
  };
}
// Priority Queue
export function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();

  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }
      return lowPriorityQueue.dequeue();
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
    length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    },
  };
}
