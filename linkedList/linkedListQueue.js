import { LinkedList } from "./index.js";

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList();
    };

    enqueue(element) {
        return this.list.append(element);
    };

    dequeue() {
        return this.list.removeFromFront();
    };

    peek() {
        return this.list.head.value;
    };

    isEmpty() {
        return this.list.isEmpty();
    };

    getSize() {
        return this.list.getSize();
    };

    print() {
        return this.list.print();
    };
};

const queue = new LinkedListQueue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print();
queue.dequeue();
queue.print()