class circularQueue{
  constructor(capacity){
    this.item = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1; // not pointing any positions initally
    this.rear = -1; // not pointing any positions initally
  };

  isFull(){
    return this.currentLength === this.capacity;
  };

  isEmpty(){
    return this.currentLength === 0;
  };

  enqueue(element){
    if(!this.isFull){
      this.rear ++;
      this.item[this.rear] = element;
      this.currentLength ++;
      if(this.front === -1){
        this.front = this.rear;
      };
    }
  };

};