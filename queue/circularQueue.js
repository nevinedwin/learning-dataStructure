class CircularQueue {
  constructor(capacity) {
    this.item = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1; // not pointing any positions initally
    this.rear = -1; // not pointing any positions initally
  };

  isFull() {
    return this.currentLength === this.capacity;
  };

  isEmpty() {
    return this.currentLength === 0;
  };

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.item[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      };
    }
  };

  dequeue() {
    if (this.isEmpty()) {
      console.log("The queue is emepty");
      return null;
    };
    const item = this.item[this.front];
    this.item[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    };
    return item;
  };

  peek() {
    if (this.isEmpty()) {
      console.log("The Queue is Empty")
      return null;
    };

    return this.item[this.front];
  };

  print() {
    if (this.isEmpty()) {
      console.log("The Queue is Empty");
    } else {
      let i;
      let result = "";
      for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
        result += `${this.item[i]} `;
      }
      result += `${this.item[i]} `;
      console.log(result);
    };

  };

};


const queue = new CircularQueue(5);

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.isFull());
console.log(queue.front)
console.log(queue.rear)
queue.print()
queue.dequeue();
queue.print()
queue.enqueue(40);
queue.print()
queue.enqueue(44);
queue.print()