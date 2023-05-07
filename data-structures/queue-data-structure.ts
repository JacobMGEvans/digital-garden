// Queue data structure => function factory pattern
export function createQueue<T>() {
  const queue: T[] = [];
  return {
    // add or enqueue
    enqueue(item: T) {
      queue.unshift(item);
    },
    // remove or dequeue
    dequeue(): T | undefined {
      return queue.pop();
    },
    // peek
    peek(): T | undefined {
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

// Priority Queue => utulizing the
// function createQueue()
export function createPriorityQueue<T>() {
  const lowPriorityQueue = createQueue<T>();
  const highPriorityQueue = createQueue<T>();

  return {
    enqueue(item: T, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue(): T | undefined {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }
      return lowPriorityQueue.dequeue();
    },
    peek(): T | undefined {
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
