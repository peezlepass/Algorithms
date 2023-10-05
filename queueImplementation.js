class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    return this.queue.unshift(element);
  }
  dequeue() {
    if (this.queue.length > 0) {
      return this.queue.pop();
    }
  }
  peek() {
    return this.queue[this.queue.length - 1];
  }
  size() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  clear() {
    this.queue = [];
  }
}

let counter = new Queue();

// add
counter.enqueue(1);
counter.enqueue(2);
counter.enqueue(3);

// get last element
console.log(counter.peek()); // 1

// remove
console.log(counter.dequeue()); // 1
console.log(counter.dequeue()); // 2

console.log(counter.isEmpty()); // false
console.log(counter.size()); // 1

counter.clear();
console.log(counter.size()); // 0

//https://www.codewars.com/kata/55a9c0994cb7e284d500005e