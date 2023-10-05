class LinkedList {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;
      return true;
    }
    let node = this.root;
    while (node.next) {
      node = node.next;
    }
    let newNode = new Node(value);
    node.next = newNode;
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    let node = this.root;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }

  getFirst() {
    return this.root && this.root.value;
  }

  getLast() {
    let current = this.root;
    while (current.next) {
      current = current.next;
    }

    return current && current.value;
  }

  get(index) {
    let counter = 0;
    let current = this.root;
    while (counter < index && current) {
      current = current.next;
      counter++;
    }
    if (current) {
      return current.value;
    } else {
      return null;
    }
  }

  remove(index) {
    if (index === 0) {
      this.root = this.root && this.root.next;
      return this;
    }

    let counter = 0;
    let current = this.root;
    while (counter < index - 1 && current) {
      current = current.next;
      counter++;
    }
    if (current && current.next) {
      current.next = current.next.next;
      return this;
    } else {
      return null;
    }
  }

  // put at beginning
  prepend(value) {
    const oldRoot = this.root;
    this.root = new Node(value);
    this.root.next = oldRoot;
    this.size += 1;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.add(5);
list.add(3);
list.add(2);
list.add(5);
list.add(7);

list.remove(0);

list.print();

console.log(list.getLast()); // 7
