class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    return this.stack.push(element);
  }
  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    }
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  clear() {
    this.stack = [];
  }
}

let counter = new Stack();

// add
counter.push(1);
counter.push(2);
counter.push(3);

// get last element
console.log(counter.peek()); // 3

// remove
console.log(counter.pop()); // 3
console.log(counter.pop()); // 2

console.log(counter.isEmpty()); // false
console.log(counter.size()); // 1

counter.clear();
console.log(counter.size()); // 0

//https://www.codewars.com/kata/55a9c0994cb7e284d500005e
