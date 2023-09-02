// singly linked List

// Class for a Node
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  };
};

// Class for singly linked list
export class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  };
  
  // if the list is empty
  isEmpty(){
    return this.size === 0;
  };

  // method for getting size of the linkedList
  getSize(){
    return this.size;
  };

  // method for adding element in 0th index of list (head)
  prepend(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;   
    }else{
      node.next = this.head;
      this.head = node;
    };
    this.size ++;
  };

  //  method for adding last of the list (tail)
  append(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;
    }else{
      this.tail.next = node;
      this.tail = node;
    };
    this.size ++;
  };

  // Method for inseting element
  insert(value, index=0){
    if(index < 0 || index > this.size){
      console.log("Invalid Index")
      return null;
    };

    if(index === 0 ){
      return this.prepend(value);
    };

    if(index === this.size ){
      return this.append(value);
    };

    const node = new Node(value);

    let prev = this.head;
    for(let i=0; i < index-1; i++){
      prev = prev.next;
    };

    node.next = prev.next;
    prev.next = node;

    this.size ++;
  };

  // Method for removing element from front;
  removeFromFront(){
    if(this.isEmpty()){
      console.log("The list is empty");
      return null;
    };
    const value = this.head.value;
    this.head =this.head.next;
    this.size --;
    return value;
  };

  // Method for removing element from back
  removeFromBack(){
    if(this.isEmpty()){
      console.log("The list is empty");
      return null;
    };

    if(this.size === 1){
      this.head = null;
      this.tail = null;
      this.size --;
      return null;
    }

    const value = this.tail.value;
    
    let prev = this.head;
    while(prev.next && prev.next !== this.tail){
      prev = prev.next; 
    };

    prev.next = null;
    this.tail = prev;
    this.size --;
    return value;
  };

  // Method for removing Element based on index
  remove(index){
    if(index < 0 || index > this.size){
      console.log("invalid index")
      return null;
    };

    if(this.isEmpty()){
      console.log("list is empty")
      return null;
    };

    let removedNode = this.head;

    if(index === 0){
      this.head = removedNode.next;
      this.size --;
      return removedNode;
    };

    let prevValue = this.head;

    for(let i=0; i < index-1; i++){
      prevValue = prevValue.next;
    };

    removedNode = prevValue.next;
    if(removedNode.next){
      prevValue.next = removedNode.next;
    }else{
      prevValue.next = null;
      this.tail = prevValue;
    };

    this.size --;
  };

  // Method for removing element based on value 
  removeValue(value){
    if(this.isEmpty()){
      console.log("this list is empty");
      return null;
    }

    if(this.head.value === value){
      return this.remove(0);
    };

    let prev = this.head;
    let index = 0;
    
    while(prev.next && prev.next.value !== value){
      prev = prev.next
      index ++;
    };
    
    if(!prev.next){
      console.log("The given value is not in the list");
      return null;
    };
    
    let removedValue = prev.next;
    prev.next = removedValue.next;

    if(index === this.size-2){
      this.tail = prev;
    }
    this.size --;
  };

  search(value){
    if(this.isEmpty()){
      console.log("List is empty");
      return -1;
    };

    let curr = this.head;
    let index = 0;

    while(curr){
      if(curr.value === value){
        return index;
      }
      index ++
      curr = curr.next;
    };
    return -1;
  };

  reverse(){
    if(this.isEmpty()){
      console.log("list is Empty")
      return null;
    };

    let prev = null;
    let curr = this.head;
    
    while(curr){
      let next = curr.next
      curr.next = prev;
      prev = curr;
      curr = next;
    };

    this.tail = this.head
    this.tail.next = null;
    this.head = prev;
  };

  print(){
    if(this.isEmpty()){
      console.log("This list is Empty")
    }else{
      let result = "[ "
      let curr = this.head;
      while(curr){
        result += `${curr.value}, `;
        curr = curr.next;
      };
      result = `${result} ]`;
      console.log(result);
    }
  };
};

// const list = new LinkedList();

// list.append(10)
// console.log(list.getSize())
// list.prepend(30)
// console.log(list.getSize())
// console.log("head ",list.head)
// console.log("tail ",list.tail)
// list.insert(33, 2)
// console.log(list.getSize())
// list.insert(34, 1)
// console.log(list.getSize())
// console.log("tail", list.tail)
// // list.remove(2);
// // console.log(list.getSize())
// // list.removeValue(30)
// console.log(list.getSize())
// console.log("tail ",list.tail)
// console.log(list.getSize())

// console.log(list.head)

// list.append(20)
// console.log(list.tail)
// // list.removeValue(34)


// list.print();
// list.reverse();
// list.print();
// // console.log(list.tail)
// // console.log(list.head)
// console.log("start");
// list.removeFromBack();
// list.print();

// // console.log(list.tail)
// // console.log(list.head)
// list.removeFromBack();
// list.print();

// // console.log(list.tail)
// // console.log(list.head)
// list.removeFromBack();
// list.print();

// // console.log(list.tail)
// // console.log(list.head)
// list.removeFromBack();
// list.print();

// // console.log(list.tail)
// // console.log(list.head)
// list.removeFromBack();
// // list.print();

// // // console.log(list.tail)
// // // console.log(list.head)
// // list.print();
// // list.removeFromBack();
// console.log(list.tail)
// console.log(list.head)

// list.print();

// console.log(list.search(33))