
// deQueue have O(n) -- complexity;

class QueueWithArray {
  constructor() {
    this.items = [];
  };

  enqueue(element) {
    this.items.push(element);
  };

  dequeue() {
    return this.items.shift();
  };

  isEmpty() {
    return this.items.length === 0;
  };

  peek() {
    if (this.isEmpty()) {
      console.log("Array is empty!")
      return null;
    };
    return this.items[0];
  };

  size() {
    return this.items.length;
  };

  print() {
    console.log(this.items.toString());
  };
};

const queue = new QueueWithArray();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.dequeue()
queue.print()
console.log(queue.peek())